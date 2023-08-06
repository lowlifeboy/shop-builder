import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext'
import { useContext } from 'react'

interface UseThemeResult {
  theme: Theme
  toggleTheme: () => void
}

export function useTheme (): UseThemeResult {
  const { theme = Theme.LIGHT, setTheme } = useContext(ThemeContext)

  function toggleTheme () {
    const newTheme: Theme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    if (setTheme) {
      setTheme(newTheme)
    }
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme)
  }

  return { theme, toggleTheme }
}
