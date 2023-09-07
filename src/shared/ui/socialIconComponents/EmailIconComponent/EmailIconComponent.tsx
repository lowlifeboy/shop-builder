import cls from './EmailIconComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { EmailIcon } from 'shared/assets/icons'

interface EmailIconComponentProps {
  className?: string
}

export default function EmailIconComponent ({ className }: EmailIconComponentProps) {
  return (
    <EmailIcon className={classNames(cls.emailIconComponent, {}, [className])} />
  )
}
