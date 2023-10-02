import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'

import { classNames } from 'shared/lib/classNames/classNames'
import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { Navbar } from 'widgets/Navbar'
import { Footer } from 'widgets/Footer'
import { navigationDropdownsConfig, searchDropdownConfig } from 'widgets/Navbar/models/mocks'
import { userActions } from 'entities/User'

const App = () => {
  const { theme } = useTheme()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(userActions.initAuthData())
  }, [dispatch])

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="Loading localization...">
        <Navbar navigationDropdownsConfig={navigationDropdownsConfig} searchDropdownConfig={searchDropdownConfig} />
        <main className="container">
          <AppRouter />
        </main>
        <Footer />
      </Suspense>
    </div>
  )
}

export default App
