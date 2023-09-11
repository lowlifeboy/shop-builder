import cls from './LoginButton.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { LoginIcon } from 'shared/assets/icons'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { LoginModal } from 'features/AuthByUsername'
import { useCallback, useState } from 'react'

interface LoginButtonProps {
  className?: string
}

export default function LoginButton ({ className }: LoginButtonProps) {
  const [isAuthModal, setIsAuthModal] = useState(false)

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  return (
    <AppButton
      theme={AppButtonTheme.CLEAR}
      onClick={onShowModal}
      className={classNames(cls.loginButton, {}, [className])}
    >
      <LoginIcon className={cls.loginIcon} />
      {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal}/>}
    </AppButton>
  )
}
