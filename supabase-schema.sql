-- =====================================================
-- SCHEMA DE SUPABASE PARA ESCALA MARKETING
-- =====================================================

-- Habilitar extensiones necesarias
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- =====================================================
-- 1. CATEGORÍAS (para blog)
-- =====================================================
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name VARCHAR(100) NOT NULL UNIQUE,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  icon VARCHAR(50), -- emoji o nombre de icono
  color VARCHAR(7), -- código hex del color
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para categorías
CREATE INDEX idx_categories_slug ON categories(slug);

-- =====================================================
-- 2. ARTÍCULOS DEL BLOG
-- =====================================================
CREATE TABLE articles (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  excerpt TEXT NOT NULL,
  content TEXT NOT NULL,
  featured_image VARCHAR(500),
  author VARCHAR(100) DEFAULT 'ESCALA Marketing',
  category_id UUID REFERENCES categories(id) ON DELETE SET NULL,
  
  -- SEO
  meta_title VARCHAR(70),
  meta_description VARCHAR(160),
  keywords TEXT[], -- array de keywords
  
  -- Estado y visibilidad
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false, -- para destacar artículo
  views INTEGER DEFAULT 0,
  
  -- Fechas
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para artículos
CREATE INDEX idx_articles_slug ON articles(slug);
CREATE INDEX idx_articles_category ON articles(category_id);
CREATE INDEX idx_articles_published ON articles(published);
CREATE INDEX idx_articles_featured ON articles(featured);
CREATE INDEX idx_articles_published_at ON articles(published_at DESC);

-- =====================================================
-- 3. PROYECTOS DEL PORTFOLIO
-- =====================================================
CREATE TABLE portfolio_projects (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  client VARCHAR(150) NOT NULL,
  industry VARCHAR(100), -- sector: restauración, ecommerce, etc.
  
  -- Contenido
  short_description TEXT NOT NULL,
  full_description TEXT NOT NULL,
  challenge TEXT, -- el reto/problema
  solution TEXT, -- la solución implementada
  results TEXT, -- resultados obtenidos
  
  -- Medios
  featured_image VARCHAR(500),
  gallery_images TEXT[], -- array de URLs de imágenes
  video_url VARCHAR(500), -- URL de video demo
  website_url VARCHAR(500), -- URL del proyecto final
  
  -- Servicios aplicados
  services TEXT[], -- array: ['diseño-web', 'seo-local', etc.]
  
  -- Métricas destacadas
  metrics JSONB, -- ej: {"visits": "+150%", "conversion": "+80%", "revenue": "+200%"}
  
  -- Estado
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  order_position INTEGER DEFAULT 0, -- para ordenar manualmente
  
  -- SEO
  meta_title VARCHAR(70),
  meta_description VARCHAR(160),
  
  -- Fechas
  project_date DATE, -- fecha del proyecto
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para portfolio
CREATE INDEX idx_portfolio_slug ON portfolio_projects(slug);
CREATE INDEX idx_portfolio_published ON portfolio_projects(published);
CREATE INDEX idx_portfolio_featured ON portfolio_projects(featured);
CREATE INDEX idx_portfolio_industry ON portfolio_projects(industry);
CREATE INDEX idx_portfolio_order ON portfolio_projects(order_position);

-- =====================================================
-- 4. CASOS DE ÉXITO
-- =====================================================
CREATE TABLE success_stories (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) NOT NULL UNIQUE,
  client VARCHAR(150) NOT NULL,
  client_logo VARCHAR(500), -- URL del logo del cliente
  industry VARCHAR(100),
  
  -- Contenido
  challenge TEXT NOT NULL, -- el problema inicial
  strategy TEXT NOT NULL, -- estrategia aplicada
  results TEXT NOT NULL, -- resultados conseguidos
  quote TEXT, -- testimonial del cliente
  quote_author VARCHAR(100), -- nombre del autor de la cita
  quote_position VARCHAR(100), -- cargo del autor
  
  -- Imágenes
  featured_image VARCHAR(500),
  before_image VARCHAR(500), -- imagen "antes"
  after_image VARCHAR(500), -- imagen "después"
  
  -- Métricas destacadas (3-4 métricas principales)
  metric_1_label VARCHAR(50), -- ej: "Visitas web"
  metric_1_value VARCHAR(50), -- ej: "+250%"
  metric_2_label VARCHAR(50),
  metric_2_value VARCHAR(50),
  metric_3_label VARCHAR(50),
  metric_3_value VARCHAR(50),
  metric_4_label VARCHAR(50),
  metric_4_value VARCHAR(50),
  
  -- Servicios aplicados
  services TEXT[], -- array de servicios usados
  
  -- Estado
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false,
  order_position INTEGER DEFAULT 0,
  
  -- SEO
  meta_title VARCHAR(70),
  meta_description VARCHAR(160),
  
  -- Fechas
  project_duration VARCHAR(50), -- ej: "6 meses", "1 año"
  project_date DATE,
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para casos de éxito
CREATE INDEX idx_success_slug ON success_stories(slug);
CREATE INDEX idx_success_published ON success_stories(published);
CREATE INDEX idx_success_featured ON success_stories(featured);
CREATE INDEX idx_success_industry ON success_stories(industry);
CREATE INDEX idx_success_order ON success_stories(order_position);

-- =====================================================
-- 5. TESTIMONIOS
-- =====================================================
CREATE TABLE testimonials (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  client_name VARCHAR(150) NOT NULL,
  client_position VARCHAR(100), -- cargo
  client_company VARCHAR(150), -- empresa
  client_photo VARCHAR(500), -- foto del cliente
  client_logo VARCHAR(500), -- logo de la empresa
  
  -- Contenido
  testimonial TEXT NOT NULL,
  rating INTEGER CHECK (rating >= 1 AND rating <= 5), -- valoración 1-5 estrellas
  
  -- Relaciones opcionales
  project_id UUID REFERENCES portfolio_projects(id) ON DELETE SET NULL,
  success_story_id UUID REFERENCES success_stories(id) ON DELETE SET NULL,
  
  -- Estado
  published BOOLEAN DEFAULT false,
  featured BOOLEAN DEFAULT false, -- para mostrar en home u otras páginas
  
  -- Fechas
  testimonial_date DATE,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para testimonios
CREATE INDEX idx_testimonials_published ON testimonials(published);
CREATE INDEX idx_testimonials_featured ON testimonials(featured);
CREATE INDEX idx_testimonials_rating ON testimonials(rating);

-- =====================================================
-- 6. FORMULARIOS DE CONTACTO
-- =====================================================
CREATE TABLE contact_submissions (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  
  -- Datos del contacto
  name VARCHAR(150) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20),
  company VARCHAR(150),
  
  -- Mensaje
  subject VARCHAR(200),
  message TEXT NOT NULL,
  
  -- Información adicional
  service_interest VARCHAR(100), -- servicio de interés
  budget_range VARCHAR(50), -- rango de presupuesto
  source VARCHAR(100), -- de dónde nos conoció
  
  -- Estado
  status VARCHAR(50) DEFAULT 'new', -- new, contacted, converted, rejected
  notes TEXT, -- notas internas del equipo
  assigned_to VARCHAR(100), -- miembro del equipo asignado
  
  -- Metadata
  ip_address VARCHAR(45),
  user_agent TEXT,
  page_url VARCHAR(500), -- página desde donde envió el form
  
  -- Fechas
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para contactos
CREATE INDEX idx_contacts_email ON contact_submissions(email);
CREATE INDEX idx_contacts_status ON contact_submissions(status);
CREATE INDEX idx_contacts_created ON contact_submissions(created_at DESC);

-- =====================================================
-- 7. SUSCRIPTORES DEL NEWSLETTER
-- =====================================================
CREATE TABLE newsletter_subscribers (
  id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email VARCHAR(255) NOT NULL UNIQUE,
  name VARCHAR(150),
  
  -- Estado
  status VARCHAR(50) DEFAULT 'active', -- active, unsubscribed, bounced
  subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  unsubscribed_at TIMESTAMP WITH TIME ZONE,
  
  -- Preferencias
  interests TEXT[], -- intereses: ['seo', 'diseño-web', 'redes-sociales']
  
  -- Metadata
  source VARCHAR(100), -- de dónde se suscribió
  ip_address VARCHAR(45),
  
  -- Fechas
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Índices para newsletter
CREATE INDEX idx_newsletter_email ON newsletter_subscribers(email);
CREATE INDEX idx_newsletter_status ON newsletter_subscribers(status);

-- =====================================================
-- FUNCIONES PARA ACTUALIZAR updated_at AUTOMÁTICAMENTE
-- =====================================================
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Aplicar trigger a todas las tablas
CREATE TRIGGER update_categories_updated_at BEFORE UPDATE ON categories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_articles_updated_at BEFORE UPDATE ON articles
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_portfolio_updated_at BEFORE UPDATE ON portfolio_projects
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_success_updated_at BEFORE UPDATE ON success_stories
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_contacts_updated_at BEFORE UPDATE ON contact_submissions
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

CREATE TRIGGER update_newsletter_updated_at BEFORE UPDATE ON newsletter_subscribers
  FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- =====================================================
-- ROW LEVEL SECURITY (RLS) POLICIES
-- =====================================================

-- Habilitar RLS en todas las tablas
ALTER TABLE categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE portfolio_projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE success_stories ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS PÚBLICAS DE LECTURA (solo contenido publicado)

-- Categorías: lectura pública
CREATE POLICY "Categorías son públicas"
  ON categories FOR SELECT
  USING (true);

-- Artículos: solo lectura de publicados
CREATE POLICY "Artículos publicados son públicos"
  ON articles FOR SELECT
  USING (published = true);

-- Portfolio: solo lectura de publicados
CREATE POLICY "Proyectos publicados son públicos"
  ON portfolio_projects FOR SELECT
  USING (published = true);

-- Casos de éxito: solo lectura de publicados
CREATE POLICY "Casos de éxito publicados son públicos"
  ON success_stories FOR SELECT
  USING (published = true);

-- Testimonios: solo lectura de publicados
CREATE POLICY "Testimonios publicados son públicos"
  ON testimonials FOR SELECT
  USING (published = true);

-- Newsletter: permitir INSERT público (para suscribirse)
CREATE POLICY "Cualquiera puede suscribirse al newsletter"
  ON newsletter_subscribers FOR INSERT
  WITH CHECK (true);

-- Contactos: permitir INSERT público (para enviar formulario)
CREATE POLICY "Cualquiera puede enviar formulario de contacto"
  ON contact_submissions FOR INSERT
  WITH CHECK (true);

-- =====================================================
-- DATOS DE EJEMPLO (CATEGORÍAS)
-- =====================================================
INSERT INTO categories (name, slug, description, icon, color) VALUES
  ('SEO y Posicionamiento', 'seo-posicionamiento', 'Optimización para motores de búsqueda', '🔍', '#3B82F6'),
  ('Diseño Web', 'diseno-web', 'Desarrollo y diseño de sitios web', '🎨', '#8B5CF6'),
  ('Redes Sociales', 'redes-sociales', 'Marketing en redes sociales', '📱', '#EC4899'),
  ('Publicidad Digital', 'publicidad-digital', 'Google Ads, Facebook Ads y más', '📊', '#F59E0B'),
  ('Estrategia Digital', 'estrategia-digital', 'Planificación y estrategia de marketing', '🎯', '#10B981'),
  ('Casos de Estudio', 'casos-estudio', 'Análisis de proyectos reales', '📈', '#EF4444');

-- =====================================================
-- NOTAS DE USO
-- =====================================================
-- 1. Ejecutar este script completo en el SQL Editor de Supabase
-- 2. Para operaciones de admin (crear, actualizar, eliminar), necesitarás
--    crear políticas adicionales basadas en autenticación
-- 3. Puedes usar el dashboard de Supabase para gestionar contenido
-- 4. Para producción, considera agregar más validaciones y constraints







