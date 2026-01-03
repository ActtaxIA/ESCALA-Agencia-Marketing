-- ============================================
-- ARREGLAR PERMISOS PARA CATEGORÍAS
-- ============================================
-- Permite lectura pública y gestión total para autenticados
-- ============================================

-- 1. ELIMINAR POLÍTICAS EXISTENTES
DROP POLICY IF EXISTS "public_read_categories" ON categories;
DROP POLICY IF EXISTS "authenticated_all_categories" ON categories;
DROP POLICY IF EXISTS "Enable read access for all users" ON categories;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON categories;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON categories;
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON categories;

-- 2. HABILITAR RLS
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;

-- 3. LECTURA PÚBLICA (todos pueden ver categorías)
CREATE POLICY "public_read_all_categories"
ON categories
FOR SELECT
TO public
USING (true);

-- 4. GESTIÓN TOTAL PARA AUTENTICADOS
CREATE POLICY "authenticated_manage_categories"
ON categories
FOR ALL
TO authenticated
USING (true)
WITH CHECK (true);

-- Verificar
SELECT 
  policyname,
  cmd AS operacion
FROM pg_policies
WHERE tablename = 'categories'
ORDER BY cmd, policyname;

-- Mensaje
DO $$
BEGIN
  RAISE NOTICE '✅ Permisos de categorías actualizados';
END $$;

