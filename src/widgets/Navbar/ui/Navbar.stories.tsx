import type { Meta, StoryObj } from '@storybook/react'

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import Navbar from './Navbar'
import { navigationDropdownsConfig, searchDropdownConfig } from 'widgets/Navbar/models/mocks'

const meta = {
  title: 'widgets/Navbar',
  component: Navbar,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Navbar>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    navigationDropdownsConfig,
    searchDropdownConfig
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

// export const Dark: Story = {
//   args: {
//     navigationDropdownsConfig,
//     searchDropdownConfig
//   },
//   decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
// }
