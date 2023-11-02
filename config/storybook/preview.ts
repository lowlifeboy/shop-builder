import type { Preview } from '@storybook/react'
import StoryDecorator from '../../src/shared/config/storybook/StoryDecorator/StoryDecorator'
import ThemeDecorator from '../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from '../../src/app/providers/ThemeProvider'
import TranslationDecorator from '../../src/shared/config/storybook/TranslationDecorator/TranslationDecorator'

const preview: Preview = {
  decorators: [
    StoryDecorator,
    ThemeDecorator(Theme.LIGHT),
    TranslationDecorator
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
