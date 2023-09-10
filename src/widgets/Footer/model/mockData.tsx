import { type NavigationColumnProps, type SocialNetwork, SocialNetworkKeys } from './types'
import { type Currency } from 'widgets/Footer/ui/CurrencySelector/ui/CurrencySelector'
import { type Language } from 'widgets/Footer/ui/LanguageSelector/ui/LanguageSelector'
import LogoIcon from 'shared/assets/icons/LogoIcon'
import {
  EmailIconComponent,
  FacebookIconComponent,
  InstagramIconComponent,
  TwitterIconComponent
} from 'shared/ui/socialIconComponents'

export const logoLight = <LogoIcon color="#121212" />
export const logoDark = <LogoIcon color="#fff" />

export const description = 'Phosf luorescently engage worldwide method process shopping.'

export const socialNetworks: SocialNetwork[] = [
  {
    key: SocialNetworkKeys.FACEBOOK,
    link: 'https://www.facebook.com'
  },
  {
    key: SocialNetworkKeys.INSTAGRAM,
    link: 'https://www.instagram.com'
  },
  {
    key: SocialNetworkKeys.TWITTER,
    link: 'https://www.twitter.com'
  },
  {
    key: SocialNetworkKeys.EMAIL,
    link: 'https://www.gmail.com'
  }
]

export const socialNetworkIcons: Record<SocialNetworkKeys, any> = {
  [SocialNetworkKeys.FACEBOOK]: FacebookIconComponent,
  [SocialNetworkKeys.INSTAGRAM]: InstagramIconComponent,
  [SocialNetworkKeys.TWITTER]: TwitterIconComponent,
  [SocialNetworkKeys.EMAIL]: EmailIconComponent
}

export const navigation: NavigationColumnProps[] = [
  {
    title: 'Shop',
    items: [
      { text: 'My account', path: 'myAccount' },
      { text: 'Login', path: 'login' },
      { text: 'Wishlist', path: 'wishlist' },
      { text: 'Cart', path: 'cart' }
    ]
  },
  {
    title: 'Information',
    items: [
      { text: 'Shipping Policy', path: 'shippingPolicy' },
      { text: 'Returns & Refunds', path: 'returns&Refunds' },
      { text: 'Cookies Policy', path: 'cookiesPolicy' },
      { text: 'Frequently asked', path: 'frequentlyAsked' }
    ]
  },
  {
    title: 'Company',
    items: [
      { text: 'About us', path: 'aboutUs' },
      { text: 'Privacy Policy', path: 'privacyPolicy' },
      { text: 'Terms & Conditions', path: 'terms&Conditions' },
      { text: 'Contact Us', path: 'contactUs' }
    ]
  }
]

export const copyright = '© 2088 Nayzak Design'

export const currencies: Currency[] = [
  {
    id: 'qwer8qw8re6',
    name: 'USD'
  },
  {
    id: 'ret8y7ert6y',
    name: 'GBP'
  },
  {
    id: 'dgf7h456fgd',
    name: 'EUR'
  },
  {
    id: 'zc7vb5xc8bx',
    name: 'JPY'
  }
]

export const languages: Language[] = [
  {
    id: 'qwewq7e76qw76',
    name: 'Deutsch',
    emoji: '🇩🇪',
    key: 'de'
  },
  {
    id: 'x53t35xt53xt',
    name: 'Italiano',
    emoji: '🇮🇹',
    key: 'it'
  },
  {
    id: 'vuj67v7h6u6vh',
    name: 'العربية',
    emoji: '🇪🇬',
    key: 'eg'
  },
  {
    id: 'bj45bj5b344jbd',
    name: '日本語',
    emoji: '🇯🇵',
    key: 'jp'
  }
]
