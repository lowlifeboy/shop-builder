import { type ReactNode } from 'react'

import cls from './Footer.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
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
  socialNetworkIcons,
  socialNetworks
} from '../model/mockData'
import { LanguageSelector } from 'models/LanguageSelector'
import { CurrencySelector } from 'models/CurrencySelector'

interface LogoDescAndSocialNetworksProps {
  logo: ReactNode
  text: string
  socialNetworks: SocialNetwork[]
}

function LogoDescAndSocialNetworks ({ logo, text, socialNetworks }: LogoDescAndSocialNetworksProps) {
  return (
    <div className={cls.footerContentLeft}>
      {logo}
      {text && <p>{text}</p>}
      <div className={cls.socialNetworks}>
        {socialNetworks.map(({ link, key }) => {
          const NetworkIconComponent = socialNetworkIcons[key]

          return (
            <AppLink target="_blank" rel="noopener noreferrer" key={key} to={link}><NetworkIconComponent /></AppLink>
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
          text={description}
          socialNetworks={socialNetworks}
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
