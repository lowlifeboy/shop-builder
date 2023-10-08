import type { Meta, StoryObj } from '@storybook/react'

import AccountWishlist from './AccountWishlist'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'

const meta = {
  title: 'pages/ProfilePage/AccountWishlist',
  component: AccountWishlist,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountWishlist>

export default meta
type Story = StoryObj<typeof meta>

const primaryState: DeepPartial<StateSchema> = {
  accountWishlist: {
    isLoading: false,
    error: null,
    data: [
      {
        id: '1',
        price: 574,
        title: 'Easy Iron Button Down Oxford Shirt',
        properties: {
          size: 'XS - 4XL',
          color: 'Grey Marl'
        },
        preview: 'https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/D38591s.jpg'
      },
      {
        id: '2',
        price: 1292,
        title: 'Shower Resistant Duratrek Anorak Jacket',
        properties: {
          size: 'M, XL',
          color: 'Green'
        },
        preview: 'https://xcdn.next.co.uk/common/Items/Default/Default/Publications/G88/shotview-315x472/2029/C82-998s.jpg'
      },
      {
        id: '3',
        price: 1866,
        title: 'Jersey Sleeve Puffer Jacket',
        properties: {
          size: 'XS - 4XL',
          color: 'Navy Blue / Grey'
        },
        preview: 'https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/AltItemShot/315x472/D45800s.jpg'
      },
      {
        id: '4',
        price: 746,
        title: 'Joggers',
        properties: {
          size: 'XS - XL',
          color: 'Charcoal Grey With Stag Logo'
        },
        preview: 'https://xcdn.next.co.uk/COMMON/Items/Default/Default/Publications/G26/shotview/2089/M50-789s.jpg'
      }
    ]
  }
}

// const loadingState: DeepPartial<StateSchema> = {
//   accountWishlist: {
//     isLoading: true,
//     error: null,
//     data: undefined
//   }
// }
//
// const errorState: DeepPartial<StateSchema> = {
//   accountWishlist: {
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
