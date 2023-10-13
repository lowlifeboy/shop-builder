import type { Meta, StoryObj } from '@storybook/react'

import Avatar from './Avatar'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import StoreDecorator from 'shared/config/storybook/StoreDecorator/StoreDecorator'

const meta = {
  title: 'shared/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/1?v=4',
    alt: 'avatar',
    size: 150
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}

export const Small: Story = {
  args: {
    src: 'https://avatars.githubusercontent.com/u/1?v=4',
    alt: 'avatar',
    size: 82
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT), StoreDecorator({})]
}
