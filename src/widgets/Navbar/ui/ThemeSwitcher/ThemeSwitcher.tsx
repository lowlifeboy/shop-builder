import { memo } from 'react'

import cls from './ThemeSwitcher.module.scss'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import { MoonIcon, SunIcon } from 'shared/assets/icons'

const ThemeSwitcher = memo(() => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button className={cls.themeSwitcher} onClick={toggleTheme}>
      {theme === Theme.DARK ? <MoonIcon className={cls.moonIcon} /> : <SunIcon className={cls.sunIcon} />}
    </button>
  )
})

export default ThemeSwitcher
