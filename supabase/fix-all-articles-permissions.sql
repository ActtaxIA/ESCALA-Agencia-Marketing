-- ============================================
-- ARREGLAR PERMISOS COMPLETOS PARA ARTÍCULOS
-- ============================================
-- Este script elimina TODAS las políticas restrictivas
-- y crea políticas que permiten acceso total a usuarios autenticados
-- ============================================

-- 1. ELIMINAR TODAS LAS POLÍTICAS EXISTENTES
DROP POLICY IF EXISTS "Lectura pública de artículos publicados" ON articles;
DROP POLICY IF EXISTS "Usuarios autenticados pueden ver todos los artículos" ON articles;
DROP POLICY IF EXISTS "Usuarios autenticados pueden crear artículos" ON articles;
DROP POLICY IF EXISTS "Usuarios autenticados pueden actualizar artículos" ON articles;
DROP POLICY IF EXISTS "Usuarios autenticados pueden eliminar artículos" ON articles;
DROP POLICY IF EXISTS "Enable read access for all users" ON articles;
DROP POLICY IF EXISTS "Enable insert for authenticated users only" ON articles;
DROP POLICY IF EXISTS "Enable update for authenticated users only" ON articles;
DROP POLICY IF EXISTS "Enable delete for authenticated users only" ON articles;

-- 2. ASEGURAR QUE RLS ESTÁ HABILITADO
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- 3. POLÍTICA DE LECTURA PÚBLICA (artículos publicados)
CREATE POLICY "public_read_published_articles"
ON articles
FOR SELECT
TO public
USING (published = true);

-- 4. POLÍTICA DE LECTURA TOTAL PARA AUTENTICADOS (ver todo)
CREATE POLICY "authenticated_read_all_articles"
ON articles
FOR SELECT
TO authenticated
USING (true);  -- Sin restricciones

-- 5. POLÍTICA DE INSERCIÓN (crear artículos)
CREATE POLICY "authenticated_insert_articles"
ON articles
FOR INSERT
TO authenticated
WITH CHECK (true);  -- Sin restricciones

-- 6. POLÍTICA DE ACTUALIZACIÓN (editar artículos)
CREATE POLICY "authenticated_update_articles"
ON articles
FOR UPDATE
TO authenticated
USING (true)  -- Puede actualizar cualquier artículo
WITH CHECK (true);  -- Sin restricciones en el resultado

-- 7. POLÍTICA DE ELIMINACIÓN (borrar artículos)
CREATE POLICY "authenticated_delete_articles"
ON articles
FOR DELETE
TO authenticated
USING (true);  -- Puede eliminar cualquier artículo

-- ============================================
-- VERIFICAR LAS POLÍTICAS CREADAS
-- ============================================
SELECT 
  policyname,
  cmd AS operacion,
  roles AS quien,
  CASE 
    WHEN qual IS NOT NULL THEN 'Con restricción'
    ELSE 'Sin restricción'
  END as restriccion
FROM pg_policies
WHERE tablename = 'articles'
ORDER BY cmd, policyname;

-- Mostrar mensaje
DO $$
BEGIN
  RAISE NOTICE '✅ Políticas actualizadas correctamente';
  RAISE NOTICE '✅ Usuarios autenticados tienen acceso TOTAL a todos los artículos';
  RAISE NOTICE '✅ Usuarios públicos solo ven artículos publicados';
END $$;

