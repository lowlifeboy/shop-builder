import type { Preview } from '@storybook/react'
import StoryDecorator from '../../src/shared/config/storybook/StoryDecorator/StoryDecorator'
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import RouterDecorator from '../../src/shared/config/storybook/RouterDecorator/RouterDecorator'

const preview: Preview = {
  decorators: [
    RouterDecorator,
    StoryDecorator,
    ThemeDecorator(Theme.LIGHT)
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
