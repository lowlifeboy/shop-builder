export interface FooterProps {
  className?: string
}

export interface SocialNetwork {
  key: string
  logo: any
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
