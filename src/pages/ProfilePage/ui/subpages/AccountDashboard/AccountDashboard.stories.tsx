import type { Meta, StoryObj } from '@storybook/react'

import AccountDashboard from './AccountDashboard'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'pages/ProfilePage/AccountDashboard',
  component: AccountDashboard,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountDashboard>

export default meta
type Story = StoryObj<typeof meta>

const primaryState: DeepPartial<StateSchema> = {
  accountDetails: {
    isLoading: false,
    error: null,
    data: {
      firstName: 'John',
      lastName: 'Doe',
      displayName: 'John Doe',
      email: 'john.dou@mail.com'
    }
  }
}

export const PrimaryLight: Story = {
  args: {},
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
