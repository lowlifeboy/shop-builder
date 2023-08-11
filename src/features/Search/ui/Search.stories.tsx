import type { Meta, StoryObj } from '@storybook/react'

import Search from './Search'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import { searchDropdownConfig } from 'widgets/Navbar/models/mocks'

const meta = {
  title: 'features/Search',
  component: Search,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Search>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    config: searchDropdownConfig
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}
