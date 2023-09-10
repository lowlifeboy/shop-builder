import { Link } from 'react-router-dom'

import cls from './ProfileIconLink.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { ProfileIcon } from 'shared/assets/icons'

interface ProfileIconLinkProps {
  className?: string
}

export default function ProfileIconLink ({ className }: ProfileIconLinkProps) {
  return (
    <Link to={'/profile'} className={classNames(cls.profileLink, {}, [className])}>
      <ProfileIcon className={cls.profileIcon} />
    </Link>
  )
}
