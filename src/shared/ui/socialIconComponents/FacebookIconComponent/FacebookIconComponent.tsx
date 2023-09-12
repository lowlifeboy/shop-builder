import { memo } from 'react'

import cls from './FacebookIconComponent.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { FacebookIcon } from 'shared/assets/icons'

interface FacebookIconComponentProps {
  className?: string
}

const FacebookIconComponent = memo(({ className }: FacebookIconComponentProps) => {
  return (
    <FacebookIcon className={classNames(cls.facebookIconComponent, {}, [className])} />
  )
})

export default FacebookIconComponent
