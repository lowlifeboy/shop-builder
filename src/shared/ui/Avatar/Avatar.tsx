import { type CSSProperties, memo, useMemo } from 'react'

import cls from './Avatar.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

const Avatar = memo(({ className, src, size, alt }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size,
      height: size
    }
  }, [size])

  return (
    <div className={classNames(cls.avatar, {}, [className])} style={styles}>
      <img src={src} alt={alt} />
    </div>
  )
})

export default Avatar
