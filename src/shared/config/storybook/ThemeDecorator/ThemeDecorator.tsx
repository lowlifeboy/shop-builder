import 'app/styles/index.scss'
import { type Theme, ThemeProvider } from 'app/providers/ThemeProvider'

export default function ThemeDecorator (theme: Theme) {
  return function (Story: any) {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app theme ${theme}`} style={{ width: '100%' }}>
          <Story />
        </div>
      </ThemeProvider>
    )
  }
}
