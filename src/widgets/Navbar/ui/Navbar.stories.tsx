import type { Meta, StoryObj } from '@storybook/react'

import Navbar from './Navbar'
import { Theme } from 'app/providers/ThemeProvider'
import { type StateSchema } from 'app/providers/StoreProvider'
import { navigationDropdownsConfig, searchDropdownConfig } from 'widgets/Navbar/models/mocks'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

const stateDefault: DeepPartial<StateSchema> = {
  user: {}
}

const stateLoggedIn: DeepPartial<StateSchema> = {
  user: {
    authData: {
      username: 'testUser',
      id: '1'
    }
  },
  accountDetails: {
    data: {
      avatar: 'https://avatars.githubusercontent.com/u/1?v=4'
    }
  }
}

export const LightDefault: Story = {
  args: {
    navigationDropdownsConfig,
    searchDropdownConfig
  },
  decorators: [StoreDecorator(stateDefault), StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const LightLoggedIn: Story = {
  args: {
    navigationDropdownsConfig,
    searchDropdownConfig
  },
  decorators: [StoreDecorator(stateLoggedIn), StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const DarkDefault: Story = {
  args: {
    navigationDropdownsConfig,
    searchDropdownConfig
  },
  decorators: [StoreDecorator(stateDefault), StoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const DarkLoggedIn: Story = {
  args: {
    navigationDropdownsConfig,
    searchDropdownConfig
  },
  decorators: [StoreDecorator(stateLoggedIn), StoryDecorator, ThemeDecorator(Theme.DARK)]
}
