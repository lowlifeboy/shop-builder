import cls from './Navbar.module.scss'

import { ThemeSwitcher } from 'widgets/Navbar/ui/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink from 'shared/ui/AppLink/AppLink'
import { HeaderLogoIcon } from 'shared/assets/icons'
import { useTheme } from 'app/providers/ThemeProvider'
import { Search } from 'features/Search'
import { BasketIconLink } from 'widgets/Navbar/ui/BasketIconLink'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'
import { AppDropdownSimple } from 'shared/ui/AppDropdownSimple/AppDropdownSimple'
import { type NavbarProps } from '../models/types'
import { LoginButton } from './LoginButton'
import { LogoutButton } from './LogoutButton'
import { useSelector } from 'react-redux'
import { ProfileIconLink } from 'widgets/Navbar/ui/ProfileIconLink'
import { getUserAuthData } from 'entities/User'

export default function Navbar ({ navigationDropdownsConfig, searchDropdownConfig, className }: NavbarProps) {
  const { theme } = useTheme()

  const authData = useSelector(getUserAuthData)

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
        {authData ? <div><ProfileIconLink/></div> : <div><LoginButton/></div>}
        {authData && <div><LogoutButton/></div>}
        <div><BasketIconLink /></div>
      </div>

    </div>
  )
}
