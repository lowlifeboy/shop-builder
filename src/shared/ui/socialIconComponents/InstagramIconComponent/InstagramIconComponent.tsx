import { memo } from 'react'

import cls from './InstagramIconComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { InstagramIcon } from 'shared/assets/icons'

interface InstagramIconComponentProps {
  className?: string
}

const InstagramIconComponent = memo(({ className }: InstagramIconComponentProps) => {
  return (
    <InstagramIcon className={classNames(cls.instagramIconComponent, {}, [className])} />
  )
})

export default InstagramIconComponent
