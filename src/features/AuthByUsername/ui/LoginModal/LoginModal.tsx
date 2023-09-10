import { useTranslation } from 'react-i18next'

import AppModal from 'shared/ui/AppModal/AppModal'
import { LoginForm } from '../LoginForm/LoginForm'

interface LoginModalProps {
  isOpen?: boolean
  onClose?: () => void
}

export default function LoginModal ({ isOpen, onClose }: LoginModalProps) {
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
