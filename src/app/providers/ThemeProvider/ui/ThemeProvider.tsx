import { type ReactNode, useMemo, useState } from 'react'

import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from '../lib/ThemeContext'

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT

interface Props {
  children?: ReactNode
  initialTheme?: Theme
}

export default function ThemeProvider ({ children, initialTheme }: Props) {
  const [theme, setTheme] = useState<Theme>(initialTheme ?? defaultTheme)

  const defaultProps = useMemo(() => ({
    theme,
    setTheme
  }), [theme])

  return (
    <ThemeContext.Provider value={defaultProps}>{children}</ThemeContext.Provider>
  )
}
