import { Suspense } from 'react'

import './styles/index.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Footer } from 'widgets/Footer'
import { navigationDropdownsConfig, searchDropdownConfig } from 'widgets/Navbar/models/mocks'

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
