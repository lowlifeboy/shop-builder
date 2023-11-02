import type { Meta, StoryObj } from '@storybook/react'

import LanguageSelector from './LanguageSelector'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import { languages } from 'widgets/Footer/model/mockData'

const meta = {
  title: 'widgets/Footer/LanguageSelector',
  component: LanguageSelector,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LanguageSelector>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    openDirection: 'down',
    openPosition: 'left',
    config: languages
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    openDirection: 'down',
    openPosition: 'left',
    config: languages
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
}
