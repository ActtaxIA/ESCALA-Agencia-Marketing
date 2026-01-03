'use client'

import { useState, useEffect } from 'react'
import { getPublicBlogImages } from './imageActions'
import styles from './ImagePicker.module.css'

interface ImagePickerProps {
  currentImage: string | null
  onImageSelected: (file: File | null, imageName: string, preview: string) => void
}

interface ExistingImage {
  name: string
  url: string
}

export default function ImagePicker({ currentImage, onImageSelected }: ImagePickerProps) {
  const [mode, setMode] = useState<'upload' | 'select'>('upload')
  const [existingImages, setExistingImages] = useState<ExistingImage[]>([])
  const [selectedExisting, setSelectedExisting] = useState<string | null>(currentImage)
  const [loading, setLoading] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [isDragging, setIsDragging] = useState(false)

  useEffect(() => {
    if (mode === 'select') {
      loadExistingImages()
    }
  }, [mode])

  const loadExistingImages = async () => {
    setLoading(true)
    try {
      const images = await getPublicBlogImages()
      setExistingImages(images)
    } catch (error) {
      console.error('Error al cargar imágenes:', error)
    } finally {
      setLoading(false)
    }
  }

  const processFile = (file: File) => {
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        const timestamp = Date.now()
        const ext = file.name.split('.').pop()
        const fileName = `image-${timestamp}.${ext}`
        onImageSelected(file, fileName, reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      processFile(file)
    }
  }

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(true)
  }

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
  }

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)

    const files = Array.from(e.dataTransfer.files)
    const imageFile = files.find(file => file.type.startsWith('image/'))
    
    if (imageFile) {
      processFile(imageFile)
    }
  }

  const handleSelectExisting = (image: ExistingImage) => {
    setSelectedExisting(image.name)
    onImageSelected(null, image.name, image.url)
  }

  // Filtrar imágenes según búsqueda
  const filteredImages = existingImages.filter(img =>
    img.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className={styles.imagePicker}>
      {/* Tabs */}
      <div className={styles.tabs}>
        <button
          type="button"
          className={mode === 'upload' ? styles.tabActive : styles.tab}
          onClick={() => setMode('upload')}
        >
          📤 Subir Nueva
        </button>
        <button
          type="button"
          className={mode === 'select' ? styles.tabActive : styles.tab}
          onClick={() => setMode('select')}
        >
          🖼️ Seleccionar Existente
        </button>
      </div>

      {/* Contenido según modo */}
      {mode === 'upload' ? (
        <div className={styles.uploadMode}>
          <div
            className={`${styles.dropZone} ${isDragging ? styles.dropZoneDragging : ''}`}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
          >
            <input
              id="file-upload"
              type="file"
              accept="image/png, image/jpeg, image/webp, image/gif"
              onChange={handleFileChange}
              className={styles.fileInputHidden}
            />
            <label htmlFor="file-upload" className={styles.dropZoneLabel}>
              <div className={styles.dropZoneIcon}>📁</div>
              <p className={styles.dropZoneText}>
                Arrastra una imagen aquí o <span className={styles.dropZoneLink}>haz clic para seleccionar</span>
              </p>
              <small className={styles.hint}>Formatos: JPG, PNG, WebP, GIF (máx 5MB)</small>
            </label>
          </div>
        </div>
      ) : (
        <div className={styles.selectMode}>
          {loading ? (
            <div className={styles.loading}>Cargando imágenes...</div>
          ) : existingImages.length > 0 ? (
            <>
              {/* Buscador */}
              <div className={styles.searchBox}>
                <input
                  type="text"
                  placeholder="🔍 Buscar por nombre..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className={styles.searchInput}
                />
                <span className={styles.resultCount}>
                  {filteredImages.length} de {existingImages.length} imágenes
                </span>
              </div>

              {/* Grid de imágenes */}
              <div className={styles.imageGrid}>
                {filteredImages.map((image) => (
                  <div
                    key={image.name}
                    className={`${styles.imageCard} ${selectedExisting === image.name ? styles.imageCardSelected : ''}`}
                    onClick={() => handleSelectExisting(image)}
                    title={image.name}
                  >
                    <img src={image.url} alt={image.name} className={styles.imageThumb} />
                    <span className={styles.imageName}>{image.name}</span>
                    {selectedExisting === image.name && (
                      <div className={styles.selectedBadge}>✓</div>
                    )}
                  </div>
                ))}
              </div>

              {filteredImages.length === 0 && (
                <div className={styles.empty}>
                  <p>No se encontraron imágenes</p>
                  <small>Intenta con otro término de búsqueda</small>
                </div>
              )}
            </>
          ) : (
            <div className={styles.empty}>
              <p>No hay imágenes en /public/blog/</p>
              <small>Sube algunas imágenes primero</small>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

