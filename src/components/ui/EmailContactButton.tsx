/**
 * Componente de Botón de Contacto con Modal de Consentimiento
 * 
 * Reemplaza formularios complejos con un simple mailto: + consentimiento RGPD
 * 
 * Uso:
 * <EmailContactButton 
 *   variant="primary"
 *   subject="Consulta desde la Home"
 * >
 *   Contáctanos
 * </EmailContactButton>
 */

'use client'

import { ReactNode } from 'react'
import { useEmailContact } from '@/hooks/useEmailContact'
import ConsentModal from './ConsentModal'
import styles from './EmailContactButton.module.css'

interface EmailContactButtonProps {
  children: ReactNode
  email?: string
  subject?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'minimal'
  size?: 'small' | 'medium' | 'large'
  className?: string
  icon?: ReactNode
}

export default function EmailContactButton({
  children,
  email = 'hola@eskaladigital.com',
  subject = 'Consulta desde la web',
  variant = 'primary',
  size = 'medium',
  className = '',
  icon
}: EmailContactButtonProps) {
  const { isModalOpen, openEmailContact, closeModal, handleAccept, email: modalEmail } = useEmailContact()

  return (
    <>
      <button
        className={`${styles.button} ${styles[variant]} ${styles[size]} ${className}`}
        onClick={() => openEmailContact(email, subject)}
      >
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </button>

      <ConsentModal
        isOpen={isModalOpen}
        onClose={closeModal}
        onAccept={handleAccept}
        email={modalEmail}
      />
    </>
  )
}

