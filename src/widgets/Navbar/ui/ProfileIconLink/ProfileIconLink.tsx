import { memo } from 'react'
import { Link } from 'react-router-dom'

import cls from './ProfileIconLink.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { ProfileIcon } from 'shared/assets/icons'
import { ProfileRoutePath, ProfileRoutes } from 'shared/config/routeConfig/routeConfig'

interface ProfileIconLinkProps {
  className?: string
}

const ProfileIconLink = memo(({ className }: ProfileIconLinkProps) => {
  return (
    <Link to={ProfileRoutePath[ProfileRoutes.PROFILE_DASHBOARD]} className={classNames(cls.profileLink, {}, [className])}>
      <ProfileIcon className={cls.profileIcon} />
    </Link>
  )
})

export default ProfileIconLink
