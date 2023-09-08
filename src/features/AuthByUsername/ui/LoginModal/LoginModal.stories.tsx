import type { Meta, StoryObj } from '@storybook/react'

import LoginModal from './LoginModal'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'

const meta = {
  title: 'features/AuthByUsername/LoginModal',
  component: LoginModal,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LoginModal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    isOpen: true
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    isOpen: true
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
}
