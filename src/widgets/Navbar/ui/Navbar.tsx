import cls from './Navbar.module.scss'

import { ThemeSwitcher } from 'models/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink from 'shared/ui/AppLink/AppLink'
import { HeaderLogoIcon } from 'shared/assets/icons'
import { useTheme } from 'app/providers/ThemeProvider'
import { Search } from 'features/Search'
import { ProfileIconLink } from 'models/ProfileIconLink'
import { BasketIconLink } from 'models/BasketIconLink'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'
import { AppDropdownSimple } from 'shared/ui/AppDropdownSimple/AppDropdownSimple'
import { type NavbarProps } from '../models/types'

export default function Navbar ({ navigationDropdownsConfig, searchDropdownConfig, className }: NavbarProps) {
  const { theme } = useTheme()

  return (
    <div data-testid="navbar" className={classNames(cls.navbar, {}, [className ?? ''])}>
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
        <div><ProfileIconLink theme={theme} /></div>
        <div><BasketIconLink theme={theme} /></div>
      </div>
    </div>
  )
}
