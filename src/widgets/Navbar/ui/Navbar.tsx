import { useSelector } from 'react-redux'

import cls from './Navbar.module.scss'

import ThemeSwitcher from './ThemeSwitcher/ThemeSwitcher'
import { classNames } from 'shared/lib/classNames/classNames'
import AppLink from 'shared/ui/AppLink/AppLink'
import { useTheme } from 'app/providers/ThemeProvider'
import { Search } from 'features/Search'
import BasketIconLink from './BasketIconLink/BasketIconLink'
import { AppDropdownSimple } from 'shared/ui/AppDropdownSimple/AppDropdownSimple'
import { type NavbarDropdown, type NavbarDropdownItem, type NavbarProps } from '../models/types'
import LoginButton from './LoginButton/LoginButton'
import LogoutButton from './LogoutButton/LogoutButton'
import ProfileIconLink from './ProfileIconLink/ProfileIconLink'
import { getUserAuthData } from 'entities/User'
import LogoLink from './LogoLink/LogoLink'
import { memo, useEffect } from 'react'
import { fetchAccountDetails, getAccountAvatar } from 'entities/AccountDetails'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

export interface NavigationListsProps {
  items: NavbarDropdown[]
}

export interface ItemsListProps {
  items: NavbarDropdownItem[]
}

const ItemsList = ({ items }: ItemsListProps) => {
  return items.map((dropDownItem) => (
    <li key={dropDownItem.path}>
      <AppLink
        className={cls.navbarDropdownItem}
        to={dropDownItem.path}
      >
        {dropDownItem.text}
      </AppLink>
    </li>
  ))
}

const NavigationLists = ({ items }: NavigationListsProps) => {
  return items.map((dropdown) => (
    <li key={dropdown.title}>
      <AppDropdownSimple title={dropdown.title}>
        <ItemsList items={dropdown.items} />
      </AppDropdownSimple>
    </li>
  ))
}

const Navbar = memo(({ navigationDropdownsConfig, searchDropdownConfig, className }: NavbarProps) => {
  const dispatch = useAppDispatch()
  const { theme } = useTheme()

  const isAuth = useSelector(getUserAuthData)
  const avatar = useSelector(getAccountAvatar)

  useEffect(() => {
    if (!avatar) {
      void dispatch(fetchAccountDetails())
    }
  }, [avatar, dispatch])

  return (
    <header data-testid="navbar" className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.container}>
        <LogoLink theme={theme}/>

        <nav className={cls.navbarNav}>
          <NavigationLists items={navigationDropdownsConfig.items}/>
        </nav>

        <div className={cls.navbarActionButtons}>
          <div><Search config={searchDropdownConfig}/></div>
          <div><ThemeSwitcher/></div>
          {isAuth ? <div><ProfileIconLink/></div> : <div><LoginButton/></div>}
          {isAuth && <div><LogoutButton/></div>}
          <div><BasketIconLink/></div>
        </div>
      </div>
    </header>
  )
})

export default Navbar
