-- ============================================
-- POLÍTICAS RLS PARA LA TABLA ARTICLES
-- ============================================
-- Estas políticas permiten:
-- 1. Lectura pública de artículos publicados
-- 2. Solo usuarios autenticados pueden crear/actualizar/eliminar
-- ============================================

-- IMPORTANTE: Si hay políticas existentes que bloquean, elimínalas primero
-- Puedes ver las políticas actuales ejecutando: check-articles-policies.sql

-- 1. Habilitar RLS en la tabla articles (si no está habilitado)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- 2. LECTURA PÚBLICA: Cualquiera puede leer artículos publicados
DROP POLICY IF EXISTS "Lectura pública de artículos publicados" ON articles;
CREATE POLICY "Lectura pública de artículos publicados"
ON articles
FOR SELECT
USING (published = true);

-- 3. LECTURA TOTAL: Usuarios autenticados pueden ver todos los artículos (incluso borradores)
DROP POLICY IF EXISTS "Usuarios autenticados pueden ver todos los artículos" ON articles;
CREATE POLICY "Usuarios autenticados pueden ver todos los artículos"
ON articles
FOR SELECT
TO authenticated
USING (true);

-- 4. INSERCIÓN: Solo usuarios autenticados pueden crear artículos
DROP POLICY IF EXISTS "Usuarios autenticados pueden crear artículos" ON articles;
CREATE POLICY "Usuarios autenticados pueden crear artículos"
ON articles
FOR INSERT
TO authenticated
WITH CHECK (true);

-- 5. ACTUALIZACIÓN: Solo usuarios autenticados pueden actualizar artículos
DROP POLICY IF EXISTS "Usuarios autenticados pueden actualizar artículos" ON articles;
CREATE POLICY "Usuarios autenticados pueden actualizar artículos"
ON articles
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 6. ELIMINACIÓN: Solo usuarios autenticados pueden eliminar artículos
DROP POLICY IF EXISTS "Usuarios autenticados pueden eliminar artículos" ON articles;
CREATE POLICY "Usuarios autenticados pueden eliminar artículos"
ON articles
FOR DELETE
TO authenticated
USING (true);

-- ============================================
-- VERIFICAR QUE LAS POLÍTICAS SE CREARON CORRECTAMENTE
-- ============================================
SELECT 
  policyname,
  cmd,
  roles,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'articles'
ORDER BY cmd, policyname;

