import { memo } from 'react'

import cls from './Footer.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { type FooterProps } from '../model/types'
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
import { LanguageSelector } from 'widgets/Footer/ui/LanguageSelector'
import { CurrencySelector } from 'widgets/Footer/ui/CurrencySelector'
import { LogoDescAndSocialNetworks } from './LogoDescAndSocialNetworks'
import { NavigationLists } from './NavigationLists'

const Footer = memo(({ className }: FooterProps) => {
  const { theme } = useTheme()

  return (
    <footer data-testid="footer" className={classNames(cls.footer, {}, [className])}>
      <div className={cls.container}>
        <div className={classNames(cls.footerContent, {}, [])}>
          <LogoDescAndSocialNetworks
            logo={theme === Theme.LIGHT ? logoLight : logoDark }
            text={description}
            socialNetworks={socialNetworks}
          />

          <NavigationLists navigation={navigation} />
        </div>

        <div className={cls.footerBottom}>
          <div className={cls.footerCopyrightText}>{copyright}</div>
          <div className={cls.footerBottomSelectors}>
            <LanguageSelector className={cls.languageSelectorMargin} openDirection={'up'} openPosition={'right'} config={languages} />
            <CurrencySelector openDirection={'up'} openPosition={'right'} config={currencies} />
          </div>
        </div>
      </div>
    </footer>
  )
})

export default Footer
