/**
 * Modal de Consentimiento para Contacto por Email
 * 
 * Se muestra antes de abrir el mailto: para cumplir con RGPD
 * Guarda la preferencia en localStorage para no molestar siempre
 */

'use client'

import { useState, useEffect } from 'react'
import styles from './ConsentModal.module.css'

interface ConsentModalProps {
  isOpen: boolean
  onClose: () => void
  onAccept: () => void
  email?: string
}

export default function ConsentModal({ 
  isOpen, 
  onClose, 
  onAccept,
  email = 'contacto@eskaladigital.com' 
}: ConsentModalProps) {
  const [accepted, setAccepted] = useState(false)
  const [rememberChoice, setRememberChoice] = useState(false)

  // Reset cuando se abre
  useEffect(() => {
    if (isOpen) {
      setAccepted(false)
      setRememberChoice(false)
    }
  }, [isOpen])

  const handleAccept = () => {
    if (!accepted) return

    // Guardar preferencia si el usuario quiere
    if (rememberChoice) {
      localStorage.setItem('eskala-contact-consent', 'accepted')
    }

    onAccept()
  }

  const handleClose = () => {
    if (rememberChoice) {
      localStorage.setItem('eskala-contact-consent', 'declined')
    }
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay oscuro */}
      <div className={styles.overlay} onClick={handleClose} />

      {/* Modal */}
      <div className={styles.modal}>
        <button 
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        {/* Icono */}
        <div className={styles.icon}>
          📧
        </div>

        {/* Título */}
        <h2 className={styles.title}>
          ¿Nos escribes por email?
        </h2>

        {/* Descripción */}
        <p className={styles.description}>
          Vas a abrir tu cliente de email para contactarnos en:
        </p>

        <div className={styles.email}>
          {email}
        </div>

        {/* Consentimiento RGPD */}
        <div className={styles.consent}>
          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxText}>
              Acepto la{' '}
              <a 
                href="/politica-privacidad" 
                target="_blank"
                className={styles.link}
              >
                política de privacidad
              </a>
              {' '}y el{' '}
              <a 
                href="/aviso-legal" 
                target="_blank"
                className={styles.link}
              >
                aviso legal
              </a>
            </span>
          </label>

          <label className={styles.checkboxLabel}>
            <input
              type="checkbox"
              checked={rememberChoice}
              onChange={(e) => setRememberChoice(e.target.checked)}
              className={styles.checkbox}
            />
            <span className={styles.checkboxText}>
              Recordar mi elección (no volver a mostrar)
            </span>
          </label>
        </div>

        {/* Info adicional */}
        <p className={styles.info}>
          Al contactarnos, tus datos personales serán tratados conforme a nuestra política de privacidad. Nunca compartiremos tu información con terceros.
        </p>

        {/* Botones */}
        <div className={styles.buttons}>
          <button 
            className={styles.cancelButton}
            onClick={handleClose}
          >
            Cancelar
          </button>
          <button 
            className={`${styles.acceptButton} ${!accepted ? styles.disabled : ''}`}
            onClick={handleAccept}
            disabled={!accepted}
          >
            Abrir Email
          </button>
        </div>
      </div>
    </>
  )
}

