export interface FooterProps {
  className?: string
}

export enum SocialNetworkKeys {
  FACEBOOK = 'facebook',
  INSTAGRAM = 'instagram',
  TWITTER = 'twitter',
  EMAIL = 'email'
}

export interface SocialNetwork {
  key: SocialNetworkKeys
  link: string
}
interface NavigationItem {
  text: string
  path: string
}

export interface NavigationColumnProps {
  title: string
  items: NavigationItem[]
}
