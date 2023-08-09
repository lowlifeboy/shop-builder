import { Suspense } from 'react'

import './styles/index.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Footer } from 'widgets/Footer'
import { type NavbarDropdownsConfig } from 'widgets/Navbar/ui/Navbar'

const navigationDropdownsConfig: NavbarDropdownsConfig = {
  items: [
    {
      title: 'Home',
      items: [
        { text: 'Home page 1', path: '/home-page-1' },
        { text: 'Home page 2', path: '/home-page-2' },
        { text: 'Home page 3', path: '/home-page-3' }
      ]
    },
    {
      title: 'Shop',
      items: [
        { text: 'Shop page 1', path: '/shop-page-1' },
        { text: 'Shop page 2', path: '/shop-page-2' },
        { text: 'Shop page 3', path: '/shop-page-3' }
      ]
    },
    {
      title: 'Product',
      items: [
        { text: 'Product page 1', path: '/product-page-1' },
        { text: 'Product page 2', path: '/product-page-2' },
        { text: 'Product page 3', path: '/product-page-3' }
      ]
    },
    {
      title: 'Pages',
      items: [
        { text: 'Page 1', path: '/page-1' },
        { text: 'Page 2', path: '/page-2' },
        { text: 'Page 3', path: '/page-3' }
      ]
    }
  ]
}

const searchDropdownConfig = {
  title: 'Quick Search',
  items: [
    { text: 'Jumpsuits', path: '/jumpsuits' },
    { text: 'Pants', path: '/pants' },
    { text: 'Streetwear', path: '/streetwear' },
    { text: 'Summer', path: '/summer' }
  ]
}

export default function App () {
  const { theme } = useTheme()

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading localization...">
        <Navbar navigationDropdownsConfig={navigationDropdownsConfig} searchDropdownConfig={searchDropdownConfig} />
        <main>
          <AppRouter />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}
