import type { Meta, StoryObj } from '@storybook/react'

import LogoutModal from './LogoutModal'
import { Theme } from 'app/providers/ThemeProvider'
import { type StateSchema } from 'app/providers/StoreProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'

const meta = {
  title: 'features/AuthByUsername/LogoutModal',
  component: LogoutModal,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LogoutModal>

export default meta
type Story = StoryObj<typeof meta>

const state: DeepPartial<StateSchema> = {
  loginForm: {
    username: 'testUser',
    password: '123',
    rememberMe: true,
    isLoading: false
  }
}

export const Light: Story = {
  args: {
    isOpen: true
  },
  decorators: [StoreDecorator(state), StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    isOpen: true
  },
  decorators: [StoreDecorator(state), StoryDecorator, ThemeDecorator(Theme.DARK)]
}
