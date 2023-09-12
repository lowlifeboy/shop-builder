import { memo } from 'react'

import cls from './TwitterIconComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { TwitterIcon } from 'shared/assets/icons'

interface TwitterIconComponentProps {
  className?: string
}

const TwitterIconComponent = memo(({ className }: TwitterIconComponentProps) => {
  return (
    <TwitterIcon className={classNames(cls.twitterIconComponent, {}, [className])} />
  )
})

export default TwitterIconComponent
