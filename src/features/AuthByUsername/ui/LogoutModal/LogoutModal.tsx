import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import AppModal from 'shared/ui/AppModal/AppModal'
import { LogoutFormAsync } from '../LogoutForm/LogoutForm.async'

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
      <LogoutFormAsync />
    </AppModal>
  )
})

export default LogoutModal
