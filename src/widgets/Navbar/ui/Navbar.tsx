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
import AppModal from 'shared/ui/AppModal/AppModal'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { useTranslation } from 'react-i18next'

export default function Navbar ({ navigationDropdownsConfig, searchDropdownConfig, className }: NavbarProps) {
  const { t } = useTranslation()
  const { theme } = useTheme()

  const [isAuthModal, setIsAuthModal] = useState(false)

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prev) => !prev)
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
          onClick={onToggleModal}
        >
          {t('signIn')}
        </AppButton>
        <div><BasketIconLink /></div>
      </div>

      <AppModal isOpen={isAuthModal} onClose={onToggleModal}>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <h1>Modal title</h1>
        {/* eslint-disable-next-line i18next/no-literal-string */}
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam autem beatae et ex exercitationem ipsa iste iusto laborum minima, necessitatibus nihil nulla, officiis porro quam quasi quis reiciendis soluta! Amet aperiam deleniti distinctio doloremque eius eveniet id inventore iste magni molestiae nihil ratione sapiente sunt tempore, unde veritatis vitae. At dicta dolore maiores molestias, nesciunt repellendus reprehenderit. Aliquam, architecto dignissimos ducimus exercitationem itaque odio vitae! Architecto commodi debitis excepturi illo magni porro possimus quod voluptatum. Asperiores, autem excepturi id magni nostrum numquam quia repudiandae sint ullam vero. Earum obcaecati optio quod rem tempore. Amet ducimus fugiat ipsa maxime temporibus!</p>
      </AppModal>
    </div>
  )
}
