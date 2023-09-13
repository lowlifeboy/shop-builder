import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'app/styles/index.scss'

import 'shared/config/i18n/i18n'

import App from 'app/App'
import { PageError } from 'widgets/PageError'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { StoreProvider } from 'app/providers/StoreProvider'
import { ThemeProvider } from 'app/providers/ThemeProvider'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <StoreProvider>
      <ErrorBoundary fallback={<PageError />}>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </StoreProvider>
  </BrowserRouter>
)
