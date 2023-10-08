import type { Meta, StoryObj } from '@storybook/react'

import AccountOrder from './AccountOrder'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import TranslationDecorator from 'shared/config/storybook/TranslationDecorator/TranslationDecorator'
import { type AccountOrderSchema } from '../../model/types/accountOrders'
import { OrderStatus } from 'shared/const/common'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'entities/AccountOrder',
  component: AccountOrder,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountOrder>

export default meta
type Story = StoryObj<typeof meta>

const data: AccountOrderSchema = {
  id: '1',
  productId: '1',
  quantity: 1,
  totalPrice: 100,
  date: '2020-01-01',
  status: OrderStatus.REJECTED
}

export const Light: Story = {
  args: data,
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), TranslationDecorator]
}

export const Dark: Story = {
  args: data,
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK), TranslationDecorator]
}
