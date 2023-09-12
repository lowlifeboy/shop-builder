import { memo } from 'react'

import cls from './EmailIconComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { EmailIcon } from 'shared/assets/icons'

interface EmailIconComponentProps {
  className?: string
}

const EmailIconComponent = memo(({ className }: EmailIconComponentProps) => {
  return (
    <EmailIcon className={classNames(cls.emailIconComponent, {}, [className])} />
  )
})

export default EmailIconComponent
