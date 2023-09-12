import { memo } from 'react'

import cls from './LogoLink.module.scss'

import { type Theme } from 'app/providers/ThemeProvider'
import AppLink from 'shared/ui/AppLink/AppLink'
import { HeaderLogoIcon } from 'shared/assets/icons'
import { getIconColorByTheme } from 'shared/lib/getMainColorByTheme/getIconColorByTheme'

interface LogoLinkProps {
  theme: Theme
}

const LogoLink = memo(({ theme }: LogoLinkProps) => {
  return (
    <AppLink className={cls.navbarLogo} to={'/'}>
      <HeaderLogoIcon color={getIconColorByTheme(theme)}/>
    </AppLink>
  )
})

export default LogoLink
