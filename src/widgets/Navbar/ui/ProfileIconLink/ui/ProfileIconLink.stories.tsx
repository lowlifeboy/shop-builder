import type { Meta, StoryObj } from '@storybook/react'

import ProfileIconLink from './ProfileIconLink'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'

const meta = {
  title: 'models/ProfileIconLink',
  component: ProfileIconLink,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ProfileIconLink>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {},
  decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
}