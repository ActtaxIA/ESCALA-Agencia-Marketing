-- ===================================
-- TABLA: empresas_murcia
-- ===================================

CREATE TABLE IF NOT EXISTS empresas_murcia (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Datos básicos
  nombre VARCHAR(300) NOT NULL,
  direccion TEXT,
  telefono VARCHAR(50),
  web VARCHAR(500),
  email VARCHAR(200),
  
  -- Valoraciones
  rating DECIMAL(2,1) DEFAULT 0,
  reviews INTEGER DEFAULT 0,
  
  -- Categorización
  categoria VARCHAR(100),
  tipo VARCHAR(200),
  ciudad VARCHAR(100) DEFAULT 'Murcia',
  
  -- Google Maps
  google_place_id VARCHAR(300) UNIQUE,
  horario JSONB,
  latitud DECIMAL(10, 8),
  longitud DECIMAL(11, 8),
  
  -- Marketing y seguimiento
  email_enviado BOOLEAN DEFAULT false,
  fecha_primer_contacto TIMESTAMP WITH TIME ZONE,
  fecha_ultimo_contacto TIMESTAMP WITH TIME ZONE,
  respuesta BOOLEAN DEFAULT false,
  estado_lead VARCHAR(50) DEFAULT 'pendiente', -- pendiente, contactado, interesado, cliente, rechazado
  notas TEXT,
  campana VARCHAR(100),
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- ===================================
-- ÍNDICES PARA OPTIMIZAR CONSULTAS
-- ===================================

CREATE INDEX IF NOT EXISTS idx_empresas_email ON empresas_murcia(email) WHERE email IS NOT NULL;
CREATE INDEX IF NOT EXISTS idx_empresas_categoria ON empresas_murcia(categoria);
CREATE INDEX IF NOT EXISTS idx_empresas_ciudad ON empresas_murcia(ciudad);
CREATE INDEX IF NOT EXISTS idx_empresas_place_id ON empresas_murcia(google_place_id);
CREATE INDEX IF NOT EXISTS idx_empresas_rating ON empresas_murcia(rating DESC);
CREATE INDEX IF NOT EXISTS idx_empresas_estado_lead ON empresas_murcia(estado_lead);

-- ===================================
-- TRIGGER PARA ACTUALIZAR updated_at
-- ===================================

CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_empresas_murcia_updated_at
    BEFORE UPDATE ON empresas_murcia
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- ===================================
-- VISTAS ÚTILES
-- ===================================

-- Vista: Empresas con email
CREATE OR REPLACE VIEW empresas_con_email AS
SELECT 
  id,
  nombre,
  email,
  telefono,
  web,
  categoria,
  rating,
  reviews,
  estado_lead,
  email_enviado
FROM empresas_murcia
WHERE email IS NOT NULL
ORDER BY rating DESC, reviews DESC;

-- Vista: Empresas sin contactar
CREATE OR REPLACE VIEW empresas_sin_contactar AS
SELECT 
  id,
  nombre,
  email,
  telefono,
  categoria,
  rating,
  reviews
FROM empresas_murcia
WHERE email IS NOT NULL 
  AND email_enviado = false
  AND estado_lead = 'pendiente'
ORDER BY rating DESC, reviews DESC;

-- Vista: Estadísticas por categoría
CREATE OR REPLACE VIEW stats_por_categoria AS
SELECT 
  categoria,
  COUNT(*) as total_empresas,
  COUNT(email) as con_email,
  ROUND(AVG(rating), 2) as rating_promedio,
  SUM(CASE WHEN email_enviado THEN 1 ELSE 0 END) as emails_enviados,
  SUM(CASE WHEN respuesta THEN 1 ELSE 0 END) as respuestas
FROM empresas_murcia
GROUP BY categoria
ORDER BY total_empresas DESC;

-- ===================================
-- POLÍTICA RLS (OPCIONAL)
-- ===================================

-- Si quieres habilitar Row Level Security
-- ALTER TABLE empresas_murcia ENABLE ROW LEVEL SECURITY;

-- Política: Solo usuarios autenticados pueden ver y modificar
-- CREATE POLICY "Usuarios autenticados pueden ver empresas"
--   ON empresas_murcia
--   FOR SELECT
--   TO authenticated
--   USING (true);

-- CREATE POLICY "Usuarios autenticados pueden insertar empresas"
--   ON empresas_murcia
--   FOR INSERT
--   TO authenticated
--   WITH CHECK (true);

-- CREATE POLICY "Usuarios autenticados pueden actualizar empresas"
--   ON empresas_murcia
--   FOR UPDATE
--   TO authenticated
--   USING (true);

COMMENT ON TABLE empresas_murcia IS 'Base de datos de empresas en Murcia para prospección comercial';
COMMENT ON COLUMN empresas_murcia.estado_lead IS 'Estados: pendiente, contactado, interesado, cliente, rechazado';
COMMENT ON COLUMN empresas_murcia.google_place_id IS 'ID único de Google Maps para evitar duplicados';

