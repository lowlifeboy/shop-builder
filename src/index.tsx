import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import 'app/styles/index.scss'

import 'shared/config/i18n/i18n'

import App from 'app/App'
import { ThemeProvider } from 'app/providers/ThemeProvider'
import { ErrorBoundary } from 'app/providers/ErrorBoundary'
import { PageError } from 'widgets/PageError'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <BrowserRouter>
    <ErrorBoundary fallback={<PageError />}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </ErrorBoundary>
  </BrowserRouter>
)
