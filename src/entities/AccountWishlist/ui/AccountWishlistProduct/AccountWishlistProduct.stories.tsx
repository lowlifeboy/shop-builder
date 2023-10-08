import type { Meta, StoryObj } from '@storybook/react'

import AccountWishlistProduct from './AccountWishlistProduct'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import TranslationDecorator from 'shared/config/storybook/TranslationDecorator/TranslationDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import { type Product } from 'entities/Product'

const meta = {
  title: 'entities/AccountWishlistProduct',
  component: AccountWishlistProduct,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountWishlistProduct>

export default meta
type Story = StoryObj<typeof meta>

const data: Product = {
  id: '1',
  price: 574,
  title: 'Easy Iron Button Down Oxford Shirt',
  properties: {
    size: 'XS - 4XL',
    color: 'Grey Marl'
  },
  preview: 'https://xcdn.next.co.uk/COMMON/Items/Default/Default/ItemImages/AltItemShot/315x472/D38591s.jpg'
}

export const Light: Story = {
  args: data,
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), TranslationDecorator]
}

export const Dark: Story = {
  args: data,
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK), TranslationDecorator]
}
