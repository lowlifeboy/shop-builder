import { memo, type ReactNode } from 'react'

import cls from './LogoDescAndSocialNetworks.module.scss'

import AppLink from 'shared/ui/AppLink/AppLink'
import { socialNetworkIcons } from '../../../model/mockData'
import { type SocialNetwork } from '../../../model/types'

interface LogoDescAndSocialNetworksProps {
  logo: ReactNode
  text: string
  socialNetworks: SocialNetwork[]
}

const LogoDescAndSocialNetworks = memo(({ logo, text, socialNetworks }: LogoDescAndSocialNetworksProps) => {
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
})

export default LogoDescAndSocialNetworks
