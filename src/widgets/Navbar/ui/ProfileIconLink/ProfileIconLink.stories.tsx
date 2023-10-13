import type { Meta, StoryObj } from '@storybook/react'

import ProfileIconLink from './ProfileIconLink'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'

const meta = {
  title: 'models/ProfileIconLink',
  component: ProfileIconLink,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfileIconLink>

export default meta
type Story = StoryObj<typeof meta>

const defaultState: DeepPartial<StateSchema> = {
  user: {
    authData: {}
  }
}

const autorizedState: DeepPartial<StateSchema> = {
  user: {
    authData: {
      id: '1',
      username: 'Test User'
    }
  },
  accountDetails: {
    data: {
      avatar: 'https://avatars.githubusercontent.com/u/1?v=4'
    }
  }
}

export const UnauthorizedLight: Story = {
  args: {},
  decorators: [StoreDecorator(defaultState), StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const UnauthorizedDark: Story = {
  args: {},
  decorators: [StoreDecorator(defaultState), StoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const AuthorizedLight: Story = {
  args: {},
  decorators: [StoreDecorator(autorizedState), StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const AuthorizedDark: Story = {
  args: {},
  decorators: [StoreDecorator(autorizedState), StoryDecorator, ThemeDecorator(Theme.DARK)]
}
