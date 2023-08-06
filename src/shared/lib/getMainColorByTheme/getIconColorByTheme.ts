import { Theme } from 'app/providers/ThemeProvider'

export function getIconColorByTheme (theme: Theme) {
  return theme === Theme.LIGHT ? '#121212' : '#fff'
}
