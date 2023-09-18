import { memo } from 'react'
import { useTranslation } from 'react-i18next'
import { NavLink, useLocation } from 'react-router-dom'

import cls from './ProfileSidebar.module.scss'

// Shared
import { classNames } from 'shared/lib/classNames/classNames'
import Avatar from 'shared/ui/Avatar/Avatar'
import { AVATAR_PLACEHOLDER } from 'shared/const/common'
import { ProfileRoutePath, ProfileRoutes } from 'shared/config/routeConfig/routeConfig'
import { useSelector } from 'react-redux'
import { getProfileDisplayName } from 'entities/Profile/model/selectors/getProfileDisplayName/getProfileDisplayName'
import { getProfileAvatar } from 'entities/Profile/model/selectors/getProfileAvatar/getProfileAvatar'

const ProfileSidebar = memo(() => {
  const { t } = useTranslation('profile')
  const { pathname } = useLocation()

  const displayName = useSelector(getProfileDisplayName)
  const avatar = useSelector(getProfileAvatar)

  const menuItems: Array<{ key: string, text: string }> = [
    {
      key: ProfileRoutePath[ProfileRoutes.PROFILE_DASHBOARD],
      text: 'Dashboard'
    },
    {
      key: ProfileRoutePath[ProfileRoutes.PROFILE_ORDERS],
      text: 'Orders'
    },
    {
      key: ProfileRoutePath[ProfileRoutes.PROFILE_ADDRESSES],
      text: 'Addresses'
    },
    {
      key: ProfileRoutePath[ProfileRoutes.PROFILE_ACCOUNT_DETAILS],
      text: 'Account details'
    },
    {
      key: ProfileRoutePath[ProfileRoutes.PROFILE_WISHLIST],
      text: 'Wishlist'
    }
  ]

  return (
    <div className={cls.profileSidebar}>
      <div className={cls.avatarWrapper}>
        <Avatar src={avatar ?? AVATAR_PLACEHOLDER} alt={displayName} size={82} />
      </div>

      <ul className={cls.profileNavigation}>
        {menuItems.filter((item) => item.key).map((item) => {
          return (
            <li
              key={item.key}
              className={classNames('', { [cls.active]: pathname.slice(1) === item.key }, [])}
            >
              <NavLink to={item.key ?? ''}>{t(item.text)}</NavLink>
            </li>
          )
        })}
      </ul>
    </div>
  )
})

export default ProfileSidebar
