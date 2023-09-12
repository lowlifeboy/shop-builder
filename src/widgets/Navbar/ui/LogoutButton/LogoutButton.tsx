import { memo, useCallback, useState } from 'react'

import cls from './LogoutButton.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { LogoutModal } from 'features/AuthByUsername'
import { LogoutIcon } from 'shared/assets/icons'

interface LogoutButtonProps {
  className?: string
}

const LogoutButton = memo(({ className }: LogoutButtonProps) => {
  const [isLogoutModal, setIsLogoutModal] = useState(false)

  const onShowModal = useCallback(() => {
    setIsLogoutModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsLogoutModal(false)
  }, [])

  return (
    <AppButton
      theme={AppButtonTheme.CLEAR}
      onClick={onShowModal}
      className={classNames(cls.logoutButton, {}, [className])}
    >
      <LogoutIcon className={cls.logoutIcon} />
      {isLogoutModal && <LogoutModal isOpen={isLogoutModal} onClose={onCloseModal}/>}
    </AppButton>
  )
})

export default LogoutButton
