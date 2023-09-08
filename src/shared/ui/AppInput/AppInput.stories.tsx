import type { Meta, StoryObj } from '@storybook/react'

import { AppInput, AppInputTheme } from './AppInput'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'

const meta = {
  title: 'shared/AppInput',
  component: AppInput,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppInput>

export default meta
type Story = StoryObj<typeof meta>

export const ClearLight: Story = {
  args: {
    placeholder: 'Some text'
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const ClearDark: Story = {
  args: {
    placeholder: 'Some text'
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const UnderlinedLight: Story = {
  args: {
    placeholder: 'Some text',
    theme: AppInputTheme.UNDERLINED
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const UnderlinedDark: Story = {
  args: {
    placeholder: 'Some text',
    theme: AppInputTheme.UNDERLINED
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
}
