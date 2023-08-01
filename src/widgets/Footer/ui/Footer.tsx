import {Link} from "react-router-dom";

import cls from './Footer.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import LogoIcon from "shared/assets/icons/LogoIcon";
import {getIconColorByTheme} from "shared/lib/getMainColorByTheme/getIconColorByTheme";
import {useTheme} from "app/providers/ThemeProvider";
import {EmailIcon, FacebookIcon, InstagramIcon, TwitterIcon} from "shared/assets/icons";
import AppLink from "shared/ui/AppLink/AppLink";

interface FooterProps {
  className?: string;
}

interface SocialNetwork {
  key: string,
  logo: any,
  link: string,
}

const socialNetworks: SocialNetwork[] = [
  {
    key: 'facebook',
    logo: FacebookIcon,
    link: 'https://www.facebook.com',
  },
  {
    key: 'instagram',
    logo: InstagramIcon,
    link: 'https://www.instagram.com',
  },
  {
    key: 'twitter',
    logo: TwitterIcon,
    link: 'https://www.twitter.com',
  },
  {
    key: 'email',
    logo: EmailIcon,
    link: 'https://www.gmail.com',
  },
];

interface NavigationItem {
  text: string;
  path: string;
}

interface NavigationColumn {
  title: string;
  items: NavigationItem[];
}

const navigation: NavigationColumn[] = [
  {
    title: 'Shop',
    items: [
      {text: 'My account', path: 'myAccount'},
      {text: 'Login', path: 'login'},
      {text: 'Wishlist', path: 'wishlist'},
      {text: 'Cart', path: 'cart'},
    ],
  },
  {
    title: 'Information',
    items: [
      {text: 'Shipping Policy', path: 'shippingPolicy'},
      {text: 'Returns & Refunds', path: 'returns&Refunds'},
      {text: 'Cookies Policy', path: 'cookiesPolicy'},
      {text: 'Frequently asked', path: 'frequentlyAsked'},
    ],
  },
  {
    title: 'Company',
    items: [
      {text: 'About us', path: 'aboutUs'},
      {text: 'Privacy Policy', path: 'privacyPolicy'},
      {text: 'Terms & Conditions', path: 'terms&Conditions'},
      {text: 'Contact Us', path: 'contactUs'},
    ],
  },
];

export default function Footer({className}: FooterProps) {
  const {theme} = useTheme();

  {/*TODO: split on components*/}
  return (
    <div className={classNames(cls.footer, {}, [className])}>
      <div className={classNames(cls.footerContent, {}, [])}>
        <div className={cls.footerContentLeft}>
          <LogoIcon color={getIconColorByTheme(theme)} />
          <p>Phosf luorescently engage worldwide method process shopping.</p>
          <div className={cls.socialNetworks}>
            {socialNetworks.map(({link, logo, key}) => {
              const LogoComponent = logo;

              return (
                <Link key={key} to={link}><LogoComponent color={getIconColorByTheme(theme)} /></Link>
              )
            })}
          </div>
        </div>

        <ul className={cls.footerNavigationColumns}>
          {navigation.map((navCol) => (
            <li>
              <h3>{navCol.title}</h3>

              <ul>
                {navCol.items.map((navItem) => (
                  <li>
                    <AppLink
                      to={navItem.path}
                      className={cls.footerNavLink}
                    >
                      {navItem.text}
                    </AppLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>

      {/*TODO: create selectors*/}
      <div className={cls.footerBottom}>
        <div className={cls.footerCopyrightText}>© 2088 Nayzak Design</div>
        <div className={cls.footerBottomSelectors}>Selectors</div>
      </div>
    </div>
  );
}
