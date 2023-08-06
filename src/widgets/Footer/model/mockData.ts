import { type NavigationColumn, type SocialNetwork } from './types'
import { EmailIcon, FacebookIcon, InstagramIcon, TwitterIcon } from 'shared/assets/icons'
import { type Currency } from 'entities/CurrencySelector/ui/CurrencySelector'
import { type Language } from 'entities/LanguageSelector/ui/LanguageSelector'

export const socialNetworks: SocialNetwork[] = [
  {
    key: 'facebook',
    logo: FacebookIcon,
    link: 'https://www.facebook.com'
  },
  {
    key: 'instagram',
    logo: InstagramIcon,
    link: 'https://www.instagram.com'
  },
  {
    key: 'twitter',
    logo: TwitterIcon,
    link: 'https://www.twitter.com'
  },
  {
    key: 'email',
    logo: EmailIcon,
    link: 'https://www.gmail.com'
  }
]

export const navigation: NavigationColumn[] = [
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
