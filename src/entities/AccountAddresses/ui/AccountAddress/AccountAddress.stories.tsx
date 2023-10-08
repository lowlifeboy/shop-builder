import type { Meta, StoryObj } from '@storybook/react'

import AccountAddress from './AccountAddress'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import TranslationDecorator from 'shared/config/storybook/TranslationDecorator/TranslationDecorator'
import { type AccountAddressSchema } from '../../model/types/accountAddresses'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'entities/AccountAddress',
  component: AccountAddress,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountAddress>

export default meta
type Story = StoryObj<typeof meta>

const data: AccountAddressSchema = {
  id: '1',
  name: 'John Dou',
  street: 'Test Street',
  city: 'Test City',
  country: 'Test Country',
  zip: '12333'
}

export const Light: Story = {
  args: data,
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), TranslationDecorator]
}

export const Dark: Story = {
  args: data,
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK), TranslationDecorator]
}
