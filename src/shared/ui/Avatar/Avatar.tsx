import { type CSSProperties, memo, useMemo } from 'react'

import cls from './Avatar.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import DefaultAvatar from './defaultAvatar.jpg'

interface AvatarProps {
  src?: string
  size?: number
  alt?: string
  className?: string
}

const Avatar = memo(({ src, size, alt, className }: AvatarProps) => {
  const styles = useMemo<CSSProperties>(() => {
    return {
      width: size ?? 100,
      height: size ?? 100
    }
  }, [size])

  return (
    <div className={classNames(cls.avatar, {}, [className])} style={styles}>
      <img src={src ?? DefaultAvatar} alt={alt} />
    </div>
  )
})

export default Avatar
