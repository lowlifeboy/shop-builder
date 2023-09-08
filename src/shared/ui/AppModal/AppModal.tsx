import cls from './AppModal.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import React, { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Portal from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { CloseIcon } from 'shared/assets/icons'

interface AppModalProps {
  title?: string
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
  lazy?: boolean
}

const ANIMATION_DELAY = 300

export default function AppModal ({ title = '', className, children, isOpen, onClose, lazy }: AppModalProps) {
  const { theme } = useTheme()

  const [isClosing, setIsClosing] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  const timerRef = useRef<ReturnType<typeof setTimeout>>()

  const mods: Record<string, boolean> = {
    [cls.opened]: !!isOpen,
    [cls.closing]: isClosing
  }

  useEffect(() => {
    if (isOpen) {
      setIsMounted(true)
    }
  }, [isOpen])

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true)
      timerRef.current = setTimeout(() => {
        onClose()
        setIsClosing(false)
      }, ANIMATION_DELAY)
    }
  }, [onClose])

  const onKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeHandler()
    }
  }, [closeHandler])

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown)
    }

    return () => {
      clearTimeout(timerRef.current)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [isOpen, onKeyDown])

  function onContentClick (e: React.MouseEvent) {
    e.stopPropagation()
  }

  if (lazy && !isMounted) {
    return null
  }

  return (
    <Portal>
      <div className={classNames(cls.appModal, mods, [className, theme])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            <div className={cls.modalHeader}>
              <h3>{title}</h3>
              <AppButton onClick={closeHandler} theme={AppButtonTheme.CLEAR}>
                <CloseIcon className={cls.closeIcon} />
              </AppButton>
            </div>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
