import { type ReactNode } from 'react'

import cls from './Footer.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import AppLink from 'shared/ui/AppLink/AppLink'
import { type FooterProps, type NavigationColumnProps, type SocialNetwork } from '../model/types'
import {
  copyright,
  currencies,
  description,
  languages,
  logoDark,
  logoLight,
  navigation,
  socialNetworks
} from '../model/mockData'
import { LanguageSelector } from '../../../entities/LanguageSelector'
import { CurrencySelector } from '../../../entities/CurrencySelector'

interface LogoDescAndSocialNetworksProps {
  logo: ReactNode
  text: string
  socialNetworks: SocialNetwork[]
  theme: Theme
}

function LogoDescAndSocialNetworks ({ logo, text, socialNetworks, theme }: LogoDescAndSocialNetworksProps) {
  return (
    <div className={cls.footerContentLeft}>
      {logo}
      {text && <p>{text}</p>}
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
    <div data-testid="footer" className={classNames(cls.footer, {}, [className ?? ''])}>
      <div className={classNames(cls.footerContent, {}, [])}>
        <LogoDescAndSocialNetworks
          logo={theme === Theme.LIGHT ? logoLight : logoDark }
          text={description} socialNetworks={socialNetworks}
          theme={theme}
        />

        <ul className={cls.footerNavigationColumns}>
          {navigation.map(({ title, items }) => (
            <li key={title}>
              <NavigationColumn title={title} items={items} />
            </li>
          ))}
        </ul>
      </div>

      <div className={cls.footerBottom}>
        <div className={cls.footerCopyrightText}>{copyright}</div>
        <div className={cls.footerBottomSelectors}>
          <LanguageSelector className={cls.languageSelectorMargin} openDirection={'up'} openPosition={'right'} config={languages} />
          <CurrencySelector openDirection={'up'} openPosition={'right'} config={currencies} />
        </div>
      </div>
    </div>
  )
}
