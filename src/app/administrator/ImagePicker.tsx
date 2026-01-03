'use client'

import { useState, useEffect } from 'react'
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
  const [showModal, setShowModal] = useState(false)

  useEffect(() => {
    if (mode === 'select' && !existingImages.length) {
      loadExistingImages()
    }
  }, [mode])

  const loadExistingImages = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/blog-images')
      if (!response.ok) {
        throw new Error('Error al cargar imágenes')
      }
      const images = await response.json()
      setExistingImages(images)
    } catch (error) {
      console.error('Error al cargar imágenes:', error)
      setExistingImages([])
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
    setShowModal(false) // Cerrar modal al seleccionar
    setSearchTerm('') // Limpiar búsqueda
  }

  const openGalleryModal = () => {
    setMode('select')
    if (!existingImages.length) {
      loadExistingImages()
    }
    setShowModal(true)
  }

  // Filtrar imágenes según búsqueda
  const filteredImages = existingImages.filter(img =>
    img.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // Preview de imagen actual
  const currentImageUrl = currentImage ? `/blog/${currentImage}` : null

  return (
    <div className={styles.imagePicker}>
      {/* Vista compacta: Botones principales */}
      <div className={styles.mainActions}>
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

        <button
          type="button"
          className={styles.btnGallery}
          onClick={openGalleryModal}
        >
          🖼️ Seleccionar de Galería ({existingImages.length || '...'})
        </button>
      </div>

      {/* Preview de imagen actual */}
      {currentImageUrl && (
        <div className={styles.currentImagePreview}>
          <small>Imagen actual:</small>
          <img src={currentImageUrl} alt="Preview" className={styles.currentImageThumb} />
          <span className={styles.currentImageName}>{currentImage}</span>
        </div>
      )}

      {/* Modal de Galería */}
      {showModal && (
        <div className={styles.modalOverlay} onClick={() => setShowModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>Seleccionar Imagen</h3>
              <button
                type="button"
                className={styles.modalClose}
                onClick={() => setShowModal(false)}
                title="Cerrar"
              >
                ✕
              </button>
            </div>

            {loading ? (
              <div className={styles.loading}>Cargando imágenes...</div>
            ) : (
              <>
                {/* Buscador */}
                <div className={styles.modalSearch}>
                  <input
                    type="text"
                    placeholder="🔍 Buscar por nombre..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className={styles.searchInput}
                    autoFocus
                  />
                  <span className={styles.resultCount}>
                    {filteredImages.length} de {existingImages.length} imágenes
                  </span>
                </div>

                {/* Grid de imágenes con scroll */}
                <div className={styles.modalImageGrid}>
                  {filteredImages.map((image) => (
                    <div
                      key={image.name}
                      className={`${styles.modalImageCard} ${selectedExisting === image.name ? styles.modalImageCardSelected : ''}`}
                      onClick={() => handleSelectExisting(image)}
                      title={image.name}
                    >
                      <div className={styles.modalImageThumbWrapper}>
                        <img src={image.url} alt={image.name} className={styles.modalImageThumb} />
                        {selectedExisting === image.name && (
                          <div className={styles.selectedBadge}>✓</div>
                        )}
                      </div>
                      <span className={styles.modalImageName}>{image.name}</span>
                    </div>
                  ))}
                </div>

                {filteredImages.length === 0 && (
                  <div className={styles.modalEmpty}>
                    <p>No se encontraron imágenes</p>
                    <small>Intenta con otro término de búsqueda</small>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

