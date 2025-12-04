'use client'

import { useState } from 'react'
import styles from './WhatsAppButton.module.css'

const PHONE_NUMBER = '34626823404'

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false)
  const [message, setMessage] = useState('')
  const [step, setStep] = useState<'greeting' | 'writing'>('greeting')

  const handleOpen = () => {
    setIsOpen(true)
    setStep('greeting')
    setMessage('')
  }

  const handleClose = () => {
    setIsOpen(false)
    setStep('greeting')
    setMessage('')
  }

  const handleStartWriting = (prefilledMessage?: string) => {
    setStep('writing')
    if (prefilledMessage) {
      setMessage(prefilledMessage)
    }
  }

  const handleSend = () => {
    if (message.trim()) {
      const url = `https://wa.me/${PHONE_NUMBER}?text=${encodeURIComponent(message)}`
      window.open(url, '_blank')
      handleClose()
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className={styles.whatsappContainer}>
      {/* Chat popup */}
      <div className={`${styles.chatBox} ${isOpen ? styles.chatOpen : ''}`}>
        {/* Header */}
        <div className={styles.chatHeader}>
          <div className={styles.chatHeaderInfo}>
            <div className={styles.chatAvatar}>
              <span>E</span>
              <span className={styles.onlineIndicator}></span>
            </div>
            <div className={styles.chatHeaderText}>
              <strong>ESCALA Marketing</strong>
              <span>Normalmente responde en minutos</span>
            </div>
          </div>
          <button className={styles.chatClose} onClick={handleClose}>×</button>
        </div>

        {/* Body */}
        <div className={styles.chatBody}>
          {/* Mensaje de bienvenida */}
          <div className={styles.messageBot}>
            <div className={styles.messageBubble}>
              <p>👋 ¡Hola! ¿Cómo estás?</p>
              <p>Soy del equipo de ESCALA. ¿En qué podemos ayudarte hoy?</p>
            </div>
            <span className={styles.messageTime}>Ahora</span>
          </div>

          {step === 'greeting' && (
            <div className={styles.quickReplies}>
              <button onClick={() => handleStartWriting('Hola, me gustaría recibir información sobre vuestros servicios de marketing digital.')}>
                💬 Quiero información
              </button>
              <button onClick={() => handleStartWriting('Hola, me gustaría solicitar un presupuesto para mi proyecto.')}>
                📋 Solicitar presupuesto
              </button>
              <button onClick={() => handleStartWriting('Hola, tengo una duda sobre ')}>
                🤔 Tengo una duda
              </button>
            </div>
          )}
        </div>

        {/* Input */}
        <div className={styles.chatFooter}>
          {step === 'writing' ? (
            <>
              <textarea
                className={styles.chatInput}
                placeholder="Escribe tu mensaje..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                autoFocus
                rows={2}
              />
              <button 
                className={`${styles.sendBtn} ${message.trim() ? styles.sendActive : ''}`}
                onClick={handleSend}
                disabled={!message.trim()}
              >
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                </svg>
              </button>
            </>
          ) : (
            <button className={styles.startChatBtn} onClick={handleStartWriting}>
              Escribe un mensaje...
            </button>
          )}
        </div>

        {/* Powered by */}
        <div className={styles.chatPowered}>
          <svg viewBox="0 0 24 24" fill="#25D366" width="14" height="14">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Continúa en WhatsApp
        </div>
      </div>

      {/* Botón principal */}
      <button
        className={styles.whatsappBtn}
        onClick={handleOpen}
        aria-label="Contactar por WhatsApp"
      >
        <svg className={styles.whatsappIcon} viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className={styles.pulse}></span>
      </button>

      {/* Notificación */}
      {!isOpen && (
        <div className={styles.notification}>
          <span>1</span>
        </div>
      )}
    </div>
  )
}
