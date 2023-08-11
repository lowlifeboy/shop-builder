import type { Meta, StoryObj } from '@storybook/react'

import AppInput from './AppInput'
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

export const Light: Story = {
  args: {},
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {},
  decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
}
