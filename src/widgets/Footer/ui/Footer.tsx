import cls from './Footer.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import LogoIcon from 'shared/assets/icons/LogoIcon'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'
import { type Theme, useTheme } from 'app/providers/ThemeProvider'
import AppLink from 'shared/ui/AppLink/AppLink'
import { type FooterProps, type NavigationColumnProps } from '../model/types'
import { currencies, languages, navigation, socialNetworks } from '../model/mockData'
import CurrencySelector from 'entities/CurrencySelector/ui/CurrencySelector'
import LanguageSelector from 'entities/LanguageSelector/ui/LanguageSelector'

interface LogoDescAndSocialNetworksProps {
  theme: Theme
}

function LogoDescAndSocialNetworks ({ theme }: LogoDescAndSocialNetworksProps) {
  return (
    <div className={cls.footerContentLeft}>
      <LogoIcon color={getIconColorByTheme(theme)} />
      <p>Phosf luorescently engage worldwide method process shopping.</p>
      <div className={cls.socialNetworks}>
        {socialNetworks.map(({ link, logo, key }) => {
          const LogoComponent = logo

          return (
            <AppLink target="_blank" rel="noopener noreferrer" key={key} to={link}><LogoComponent color={getIconColorByTheme(theme)} /></AppLink>
          )
        })}
      </div>
    </div>
  )
}

function NavigationColumn ({ title, items }: NavigationColumnProps) {
  return (
    <div>
      <h3>{title}</h3>

      <ul>
        {items.map(({ path, text }) => (
          <li key={path}>
            <AppLink to={path} className={cls.footerNavLink}>
              {text}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer ({ className }: FooterProps) {
  const { theme } = useTheme()

  return (
    <div className={classNames(cls.footer, {}, [className ?? ''])}>
      <div className={classNames(cls.footerContent, {}, [])}>
        <LogoDescAndSocialNetworks theme={theme} />

        <ul className={cls.footerNavigationColumns}>
          {navigation.map(({ title, items }) => (
            <li key={title}>
              <NavigationColumn title={title} items={items} />
            </li>
          ))}
        </ul>
      </div>

      <div className={cls.footerBottom}>
        <div className={cls.footerCopyrightText}>© 2088 Nayzak Design</div>
        <div className={cls.footerBottomSelectors}>
          <LanguageSelector className={cls.languageSelectorMargin} openDirection={'up'} openPosition={'right'} config={languages} />
          <CurrencySelector openDirection={'up'} openPosition={'right'} config={currencies} />
        </div>
      </div>
    </div>
  )
}
