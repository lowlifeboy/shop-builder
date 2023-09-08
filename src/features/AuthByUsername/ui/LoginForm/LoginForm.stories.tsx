import type { Meta, StoryObj } from '@storybook/react'

import LoginForm from './LoginForm'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'

const meta = {
  title: 'features/AuthByUsername/LoginForm',
  component: LoginForm,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LoginForm>

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
