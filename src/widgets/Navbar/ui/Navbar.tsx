import { useCallback, useState } from 'react'

import cls from './Navbar.module.scss'

import { ThemeSwitcher } from 'models/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink from 'shared/ui/AppLink/AppLink'
import { HeaderLogoIcon } from 'shared/assets/icons'
import { useTheme } from 'app/providers/ThemeProvider'
import { Search } from 'features/Search'
import { BasketIconLink } from 'models/BasketIconLink'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'
import { AppDropdownSimple } from 'shared/ui/AppDropdownSimple/AppDropdownSimple'
import { type NavbarProps } from '../models/types'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { useTranslation } from 'react-i18next'
import { LoginModal } from 'features/AuthByUsername'

export default function Navbar ({ navigationDropdownsConfig, searchDropdownConfig, className }: NavbarProps) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onShowModal = useCallback(() => {
    setIsAuthModal(true)
  }, [])

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false)
  }, [])

  return (
    <div data-testid="navbar" className={classNames(cls.navbar, {}, [className])}>
      <AppLink className={cls.navbarLogo} to={'/'}>
        <HeaderLogoIcon color={getIconColorByTheme(theme)} />
      </AppLink>

      <nav className={cls.navbarNav}>
        {navigationDropdownsConfig.items.map((dropdown) => (
          <li key={dropdown.title}>
            <AppDropdownSimple title={dropdown.title}>
              {dropdown.items.map((dropDownItem) => (
                <li key={dropDownItem.path}>
                  <AppLink
                    className={cls.navbarDropdownItem}
                    to={dropDownItem.path}
                  >
                    {dropDownItem.text}
                  </AppLink>
                </li>
              ))}
            </AppDropdownSimple>
          </li>
        ))}
      </nav>

      <div className={cls.navbarActionButtons}>
        <div><Search config={searchDropdownConfig} /></div>
        <div><ThemeSwitcher /></div>
        {/* <div><ProfileIconLink /></div> */}
        <AppButton
          theme={AppButtonTheme.CLEAR}
          fillTheme={AppButtonFillTheme.SOLID}
          size={AppButtonSize.M}
          onClick={onShowModal}
        >
          {t('signIn')}
        </AppButton>
        <div><BasketIconLink /></div>
      </div>

      <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />
    </div>
  )
}
