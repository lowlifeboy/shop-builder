import { memo } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import cls from './ProfileIconLink.module.scss'

import Avatar from 'shared/ui/Avatar/Avatar'
import { ProfileIcon } from 'shared/assets/icons'
import { classNames } from 'shared/lib/classNames/classNames'
import { ProfileRoutePath, ProfileRoutes } from 'shared/config/routeConfig/routeConfig'

import { getUserAuthData } from 'entities/User'
import { getAccountAvatar } from 'entities/AccountDetails'

interface ProfileIconLinkProps {
  className?: string
}

const ProfileIconLink = memo(({ className }: ProfileIconLinkProps) => {
  const isAuth = useSelector(getUserAuthData)
  const avatar = useSelector(getAccountAvatar)

  return (
    <Link to={ProfileRoutePath[ProfileRoutes.PROFILE_DASHBOARD]} className={classNames(cls.profileLink, {}, [className])}>
      {isAuth ? <Avatar src={avatar} size={28} alt="Profile" /> : <ProfileIcon className={cls.profileIcon}/>}
    </Link>
  )
})

export default ProfileIconLink
