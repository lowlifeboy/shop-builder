import type { Meta, StoryObj } from '@storybook/react'

import AccountDetailsForm from './AccountDetailsForm'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import TranslationDecorator from 'shared/config/storybook/TranslationDecorator/TranslationDecorator'
import { type StateSchema } from 'app/providers/StoreProvider'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'entities/AccountDetailsForm',
  component: AccountDetailsForm,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AccountDetailsForm>

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
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), TranslationDecorator]
}

export const PrimaryDark: Story = {
  args: {},
  decorators: [StoreDecorator(primaryState), BorderedStoryDecorator, ThemeDecorator(Theme.DARK), TranslationDecorator]
}
