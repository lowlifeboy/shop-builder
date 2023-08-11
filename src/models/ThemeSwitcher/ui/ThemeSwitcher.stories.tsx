import type { Meta, StoryObj } from '@storybook/react'

import ThemeSwitcher from './ThemeSwitcher'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'

const meta = {
  title: 'models/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}
