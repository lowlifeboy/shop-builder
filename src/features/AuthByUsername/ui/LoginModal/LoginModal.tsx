import { memo, Suspense } from 'react'
import { useTranslation } from 'react-i18next'

import { LoginFormAsync } from '../LoginForm/LoginForm.async'

import AppModal from 'shared/ui/AppModal/AppModal'
import PageLoader from 'shared/ui/PageLoader/PageLoader'

interface LoginModalProps {
  isOpen?: boolean
  onClose?: () => void
}

const LoginModal = memo(({ isOpen, onClose }: LoginModalProps) => {
  const { t } = useTranslation()

  return (
    <AppModal
      title={t('signIn')}
      isOpen={isOpen}
      onClose={onClose}
      lazy
    >
      <Suspense fallback={<PageLoader />}>
        <LoginFormAsync />
      </Suspense>
    </AppModal>
  )
})

export default LoginModal
