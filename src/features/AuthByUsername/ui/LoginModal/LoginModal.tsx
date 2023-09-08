import { useTranslation } from 'react-i18next'

import AppModal from 'shared/ui/AppModal/AppModal'
import LoginForm from '../LoginForm/LoginForm'

interface LoginModalProps {
  className?: string
  isOpen?: boolean
  onClose?: () => void
}

export default function LoginModal ({ className, isOpen, onClose }: LoginModalProps) {
  const { t } = useTranslation()

  return (
    <AppModal
      title={t('signIn')}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LoginForm />
    </AppModal>
  )
}
