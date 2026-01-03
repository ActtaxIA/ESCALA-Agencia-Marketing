-- ============================================
-- VERIFICAR POLÍTICAS DE LA TABLA ARTICLES
-- ============================================

-- Ver todas las políticas actuales de la tabla articles
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies
WHERE tablename = 'articles'
ORDER BY cmd, policyname;

-- Ver si RLS está activado en la tabla articles
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables
WHERE tablename = 'articles';

