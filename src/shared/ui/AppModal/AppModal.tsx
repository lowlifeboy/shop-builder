import cls from './AppModal.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import React, { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'
import Portal from 'shared/ui/Portal/Portal'
import { useTheme } from 'app/providers/ThemeProvider'

interface AppModalProps {
  className?: string
  children?: ReactNode
  isOpen?: boolean
  onClose?: () => void
}

const ANIMATION_DELAY = 300

export default function AppModal ({ className, children, isOpen, onClose }: AppModalProps) {
  const [isClosing, setIsClosing] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout>>()
  const { theme } = useTheme()

  const mods: Record<string, boolean> = {
    [cls.opened]: !!isOpen,
    [cls.closing]: isClosing,
    [cls[theme]]: true
  }

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

  return (
    <Portal>
      <div className={classNames(cls.appModal, mods, [className ?? ''])}>
        <div className={cls.overlay} onClick={closeHandler}>
          <div className={cls.content} onClick={onContentClick}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
}
