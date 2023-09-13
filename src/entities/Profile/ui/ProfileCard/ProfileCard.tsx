import { memo, useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'

import cls from './ProfileCard.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { getProfileState } from '../../model/selectors/getProfileState/getProfileState'
import { getProfileLoading } from '../../model/selectors/getProfileLoading/getProfileLoading'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'
import AppButton, { AppButtonTheme } from 'shared/ui/AppButton/AppButton'

interface ProfileCardProps {
  className?: string
}

const menuItems = [
  {
    key: 'orders',
    text: 'Orders'
  },
  {
    key: 'addresses',
    text: 'Addresses'
  },
  {
    key: 'accountDetails',
    text: 'Account details'
  },
  {
    key: 'wishlist',
    text: 'Wishlist'
  }
]

const ProfileCard = memo(({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')

  const data = useSelector(getProfileState)
  const isLoading = useSelector(getProfileLoading)
  const error = useSelector(getProfileError)

  const [editing, setEditing] = useState(false)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')

  console.log('data', data)
  console.log('isLoading', isLoading)
  console.log('error', error)

  useEffect(() => {
    setFirstName(data?.firstName ?? '')
    setLastName(data?.lastName ?? '')
  }, [data])

  return (
    <div className={classNames(cls.profileCard, {}, [className])}>
      <div className={cls.sidebar}>
        <div className={cls.avatarWrapper}>
          <img src={data?.avatar} alt="Avatar"/>
        </div>

        <div className={cls.profileNavigation}>
          <h3>{t('dashboard')}</h3>

          <ul>
            {menuItems.map((item) => (
              <li key={item.key}>
                <a href={`/profile/${item.key}`}>{t(item.text)}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={cls.profileData}>
        <AppButton theme={AppButtonTheme.ROUNDED} onClick={() => { setEditing(!editing) }}>{editing ? t('cancel') : t('edit')}</AppButton>

        <AppInput
          theme={AppInputTheme.UNDERLINED}
          value={firstName}
          onChange={(value) => { setFirstName(value) }}
          placeholder={t('enterFirstName')}
          showError
          autofocus={editing}
          disabled={!editing}
        />

        <AppInput
          theme={AppInputTheme.UNDERLINED}
          value={lastName}
          onChange={(value) => { setLastName(value) }}
          placeholder={t('enterLastName')}
          showError
          autofocus={editing}
          disabled={!editing}
        />
      </div>
    </div>
  )
})

export default ProfileCard
