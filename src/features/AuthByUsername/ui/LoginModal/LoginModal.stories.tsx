import { type DeepPartial } from '@reduxjs/toolkit'
import type { Meta, StoryObj } from '@storybook/react'

import LoginModal from './LoginModal'
import { Theme } from 'app/providers/ThemeProvider'
import { type StateSchema } from 'app/providers/StoreProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import TranslationDecorator from 'shared/config/storybook/TranslationDecorator/TranslationDecorator'

const meta = {
  title: 'features/AuthByUsername/LoginModal',
  component: LoginModal,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof LoginModal>

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
  decorators: [StoreDecorator(state), StoryDecorator, ThemeDecorator(Theme.LIGHT), TranslationDecorator]
}

export const Dark: Story = {
  args: {
    isOpen: true
  },
  decorators: [StoreDecorator(state), StoryDecorator, ThemeDecorator(Theme.DARK), TranslationDecorator]
}
