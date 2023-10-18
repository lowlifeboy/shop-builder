import { type CSSProperties, memo } from 'react'

import cls from './AppSkeleton.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface AppSkeletonProps {
  width?: string | number
  height?: string | number
  borderRadius?: string
  className?: string
}

const AppSkeleton = memo(({ className, width, height, borderRadius }: AppSkeletonProps) => {
  const styles: CSSProperties = {
    width,
    height,
    borderRadius
  }

  return (
    <div
      className={classNames(cls.appSkeleton, {}, [className])}
      style={styles}
    />
  )
})

export default AppSkeleton
