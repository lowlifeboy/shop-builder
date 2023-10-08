import type { Meta, StoryObj } from '@storybook/react'

import AccountOrders from './AccountOrders'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'
import { OrderStatus } from 'shared/const/common'

const meta = {
  title: 'pages/ProfilePage/AccountOrders',
  component: AccountOrders,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountOrders>

export default meta
type Story = StoryObj<typeof meta>

const primaryState: DeepPartial<StateSchema> = {
  accountOrders: {
    isLoading: false,
    error: null,
    data: [
      {
        id: '1',
        date: '12.12.2021',
        status: OrderStatus.DELIVERED,
        productId: '1',
        quantity: 1,
        totalPrice: 100
      },
      {
        id: '2',
        date: '12.12.2021',
        status: OrderStatus.DELIVERED,
        productId: '2',
        quantity: 2,
        totalPrice: 280
      },
      {
        id: '3',
        date: '12.12.2021',
        status: OrderStatus.REJECTED,
        productId: '3',
        quantity: 3,
        totalPrice: 540
      }
    ]
  }
}

// const loadingState: DeepPartial<StateSchema> = {
//   accountOrders: {
//     isLoading: true,
//     error: null,
//     data: undefined
//   }
// }
//
// const errorState: DeepPartial<StateSchema> = {
//   accountOrders: {
//     isLoading: false,
//     error: 'error',
//     data: undefined
//   }
// }

export const PrimaryLight: Story = {
  args: {},
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.DARK), StoreDecorator({})]
}

// export const LoadingLight: Story = {
//   args: {},
//   decorators: [StoreDecorator(loadingState), BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
// }
//
// export const LoadingDark: Story = {
//   args: {},
//   decorators: [StoreDecorator(loadingState), BorderedStoryDecorator, ThemeDecorator(Theme.DARK), StoreDecorator({})]
// }
//
// export const ErrorLight: Story = {
//   args: {},
//   decorators: [StoreDecorator(errorState), BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
// }
//
// export const ErrorDark: Story = {
//   args: {},
//   decorators: [StoreDecorator(errorState), BorderedStoryDecorator, ThemeDecorator(Theme.DARK), StoreDecorator({})]
// }
