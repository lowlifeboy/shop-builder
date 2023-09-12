import { useTranslation } from 'react-i18next'

import AppModal from 'shared/ui/AppModal/AppModal'
import LogoutForm from '../LogoutForm/LogoutForm'
import { memo } from 'react'

interface LogoutModalProps {
  isOpen?: boolean
  onClose?: () => void
}

const LogoutModal = memo(({ isOpen, onClose }: LogoutModalProps) => {
  const { t } = useTranslation()

  return (
    <AppModal
      title={t('logout')}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <LogoutForm />
    </AppModal>
  )
})

export default LogoutModal
