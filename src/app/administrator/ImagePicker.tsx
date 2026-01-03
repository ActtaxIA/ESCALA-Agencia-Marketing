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

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
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

  const handleSelectExisting = (image: ExistingImage) => {
    setSelectedExisting(image.name)
    onImageSelected(null, image.name, image.url)
  }

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
          <input
            type="file"
            accept="image/png, image/jpeg, image/webp, image/gif"
            onChange={handleFileChange}
            className={styles.fileInput}
          />
          <small className={styles.hint}>Formatos: JPG, PNG, WebP, GIF</small>
        </div>
      ) : (
        <div className={styles.selectMode}>
          {loading ? (
            <div className={styles.loading}>Cargando imágenes...</div>
          ) : existingImages.length > 0 ? (
            <div className={styles.imageGrid}>
              {existingImages.map((image) => (
                <div
                  key={image.name}
                  className={`${styles.imageCard} ${selectedExisting === image.name ? styles.imageCardSelected : ''}`}
                  onClick={() => handleSelectExisting(image)}
                >
                  <img src={image.url} alt={image.name} className={styles.imageThumb} />
                  <span className={styles.imageName}>{image.name}</span>
                </div>
              ))}
            </div>
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

