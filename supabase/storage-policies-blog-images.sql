-- ============================================
-- POLÍTICAS DE SEGURIDAD PARA BUCKET blog-images
-- ============================================
-- Estas políticas permiten:
-- 1. Lectura pública de todas las imágenes (para mostrarlas en el blog)
-- 2. Solo usuarios autenticados pueden subir/actualizar/eliminar imágenes
-- ============================================

-- 1. Política de LECTURA PÚBLICA
-- Cualquier usuario (incluso anónimo) puede ver las imágenes
CREATE POLICY "Lectura pública de imágenes del blog"
ON storage.objects
FOR SELECT
USING (bucket_id = 'blog-images');

-- 2. Política de INSERCIÓN (subir imágenes)
-- Solo usuarios autenticados pueden subir imágenes
CREATE POLICY "Solo usuarios autenticados pueden subir imágenes"
ON storage.objects
FOR INSERT
TO authenticated
WITH CHECK (bucket_id = 'blog-images');

-- 3. Política de ACTUALIZACIÓN (editar imágenes)
-- Solo usuarios autenticados pueden actualizar imágenes
CREATE POLICY "Solo usuarios autenticados pueden actualizar imágenes"
ON storage.objects
FOR UPDATE
TO authenticated
USING (bucket_id = 'blog-images')
WITH CHECK (bucket_id = 'blog-images');

-- 4. Política de ELIMINACIÓN (borrar imágenes)
-- Solo usuarios autenticados pueden eliminar imágenes
CREATE POLICY "Solo usuarios autenticados pueden eliminar imágenes"
ON storage.objects
FOR DELETE
TO authenticated
USING (bucket_id = 'blog-images');

-- ============================================
-- VERIFICAR LAS POLÍTICAS CREADAS
-- ============================================
-- Ejecuta esta consulta para verificar que las políticas se crearon correctamente:
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies
WHERE tablename = 'objects'
  AND qual LIKE '%blog-images%'
ORDER BY policyname;

