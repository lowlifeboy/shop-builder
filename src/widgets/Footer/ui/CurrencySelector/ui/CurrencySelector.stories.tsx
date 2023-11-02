import type { Meta, StoryObj } from '@storybook/react'

import CurrencySelector from './CurrencySelector'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import { currencies } from 'widgets/Footer/model/mockData'

const meta = {
  title: 'widgets/Footer/CurrencySelector',
  component: CurrencySelector,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CurrencySelector>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    openDirection: 'down',
    openPosition: 'left',
    config: currencies
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    openDirection: 'down',
    openPosition: 'left',
    config: currencies
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
}
