import type { Meta, StoryObj } from '@storybook/react'

import AccountDetailsPage from './AccountDetailsPage'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'pages/AccountDetailsPage',
  component: AccountDetailsPage,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountDetailsPage>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}

export const Dark: Story = {
  args: {},
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK), StoreDecorator({})]
}
