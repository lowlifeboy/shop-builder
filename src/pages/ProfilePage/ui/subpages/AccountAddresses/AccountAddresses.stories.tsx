import type { Meta, StoryObj } from '@storybook/react'

import AccountAddresses from './AccountAddresses'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'pages/ProfilePage/AccountAddresses',
  component: AccountAddresses,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountAddresses>

export default meta
type Story = StoryObj<typeof meta>

const primaryState: DeepPartial<StateSchema> = {
  accountAddresses: {
    isLoading: false,
    error: null,
    data: [
      {
        id: '1',
        name: 'name 1',
        street: 'street 1',
        city: 'city 1',
        country: 'country 1',
        zip: 'zip1'
      },
      {
        id: '2',
        name: 'name 2',
        street: 'street 2',
        city: 'city 2',
        country: 'country 2',
        zip: 'zip2'
      }
    ]
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
