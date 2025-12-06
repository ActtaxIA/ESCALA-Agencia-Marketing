/**
 * Hook para manejar el contacto por email con consentimiento RGPD
 * 
 * Uso:
 * const { openEmailContact } = useEmailContact()
 * <button onClick={() => openEmailContact('hola@eskaladigital.com', 'Consulta Web')}>
 *   Contactar
 * </button>
 */

'use client'

import { useState, useCallback } from 'react'

interface UseEmailContactReturn {
  isModalOpen: boolean
  openEmailContact: (email?: string, subject?: string) => void
  closeModal: () => void
  handleAccept: () => void
  email: string
}

export function useEmailContact(): UseEmailContactReturn {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [email, setEmail] = useState('contacto@eskaladigital.com')
  const [subject, setSubject] = useState('')

  const openEmailContact = useCallback((
    contactEmail: string = 'contacto@eskaladigital.com',
    emailSubject: string = 'Consulta desde la web'
  ) => {
    // Verificar si ya dio consentimiento
    const consent = localStorage.getItem('eskala-contact-consent')
    
    if (consent === 'accepted') {
      // Ya aceptó antes, abrir email directamente
      openMailto(contactEmail, emailSubject)
    } else {
      // Mostrar modal de consentimiento
      setEmail(contactEmail)
      setSubject(emailSubject)
      setIsModalOpen(true)
    }
  }, [])

  const closeModal = useCallback(() => {
    setIsModalOpen(false)
  }, [])

  const handleAccept = useCallback(() => {
    // Abrir email y cerrar modal
    openMailto(email, subject)
    setIsModalOpen(false)
  }, [email, subject])

  return {
    isModalOpen,
    openEmailContact,
    closeModal,
    handleAccept,
    email
  }
}

// Función auxiliar para abrir mailto
function openMailto(email: string, subject: string) {
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}`
  window.location.href = mailtoLink
}

