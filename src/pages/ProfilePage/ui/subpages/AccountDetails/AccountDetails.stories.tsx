import type { Meta, StoryObj } from '@storybook/react'

import AccountDetails from './AccountDetails'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'

const meta = {
  title: 'pages/ProfilePage/AccountDetails',
  component: AccountDetails,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountDetails>

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

export const Light: Story = {
  args: {},
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {},
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
