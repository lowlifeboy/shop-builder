import cls from './InstagramIconComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { InstagramIcon } from 'shared/assets/icons'

interface InstagramIconComponentProps {
  className?: string
}

export default function InstagramIconComponent ({ className }: InstagramIconComponentProps) {
  return (
    <InstagramIcon className={classNames(cls.instagramIconComponent, {}, [className])} />
  )
}
