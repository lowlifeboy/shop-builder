import 'app/styles/index.scss'
import { type Theme } from 'app/providers/ThemeProvider'

export default function ThemeDecorator (theme: Theme) {
  return function (Story: any) {
    return (
      <div className={`app theme ${theme}`}>
        <Story />
      </div>
    )
  }
}
