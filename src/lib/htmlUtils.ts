/**
 * Utilidades para manipulación de HTML y texto
 */

/**
 * Decodifica entidades HTML en un texto
 * Convierte &aacute; → á, &eacute; → é, etc.
 */
export function decodeHtmlEntities(text: string): string {
  if (typeof window === 'undefined') {
    // En el servidor, usar reemplazos manuales
    return text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&apos;/g, "'")
      .replace(/&#39;/g, "'")
      .replace(/&#x27;/g, "'")
      // Vocales con tilde
      .replace(/&aacute;/g, 'á')
      .replace(/&eacute;/g, 'é')
      .replace(/&iacute;/g, 'í')
      .replace(/&oacute;/g, 'ó')
      .replace(/&uacute;/g, 'ú')
      .replace(/&Aacute;/g, 'Á')
      .replace(/&Eacute;/g, 'É')
      .replace(/&Iacute;/g, 'Í')
      .replace(/&Oacute;/g, 'Ó')
      .replace(/&Uacute;/g, 'Ú')
      // Ñ
      .replace(/&ntilde;/g, 'ñ')
      .replace(/&Ntilde;/g, 'Ñ')
      // Diéresis
      .replace(/&uuml;/g, 'ü')
      .replace(/&Uuml;/g, 'Ü')
      .replace(/&auml;/g, 'ä')
      .replace(/&euml;/g, 'ë')
      .replace(/&iuml;/g, 'ï')
      .replace(/&ouml;/g, 'ö')
      // Signos de puntuación
      .replace(/&iexcl;/g, '¡')
      .replace(/&iquest;/g, '¿')
      // Comillas
      .replace(/&ldquo;/g, '"')
      .replace(/&rdquo;/g, '"')
      .replace(/&lsquo;/g, ''')
      .replace(/&rsquo;/g, ''')
      .replace(/&sbquo;/g, '‚')
      .replace(/&bdquo;/g, '„')
      // Guiones
      .replace(/&mdash;/g, '—')
      .replace(/&ndash;/g, '–')
      // Otros
      .replace(/&hellip;/g, '...')
      .replace(/&bull;/g, '•')
      .replace(/&middot;/g, '·')
      .replace(/&deg;/g, '°')
      .replace(/&euro;/g, '€')
      .replace(/&pound;/g, '£')
      .replace(/&copy;/g, '©')
      .replace(/&reg;/g, '®')
      .replace(/&trade;/g, '™')
      // Entidades numéricas comunes
      .replace(/&#8211;/g, '–')
      .replace(/&#8212;/g, '—')
      .replace(/&#8216;/g, ''')
      .replace(/&#8217;/g, ''')
      .replace(/&#8220;/g, '"')
      .replace(/&#8221;/g, '"')
      .replace(/&#8230;/g, '...')
  }

  // En el cliente, usar el DOM para decodificar
  const textarea = document.createElement('textarea')
  textarea.innerHTML = text
  return textarea.value
}

/**
 * Limpia tags HTML de un texto pero mantiene el contenido
 */
export function stripHtmlTags(html: string): string {
  if (typeof window === 'undefined') {
    // En el servidor, usar regex
    return html.replace(/<[^>]*>/g, '')
  }
  
  // En el cliente, usar el DOM
  const div = document.createElement('div')
  div.innerHTML = html
  return div.textContent || div.innerText || ''
}

/**
 * Decodifica entidades HTML y limpia tags
 */
export function cleanHtmlText(html: string): string {
  const withoutTags = stripHtmlTags(html)
  return decodeHtmlEntities(withoutTags)
}

/**
 * Trunca texto a un número de caracteres manteniendo palabras completas
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text
  
  const truncated = text.substring(0, maxLength)
  const lastSpace = truncated.lastIndexOf(' ')
  
  if (lastSpace > 0) {
    return truncated.substring(0, lastSpace) + '...'
  }
  
  return truncated + '...'
}

