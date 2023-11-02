import type { Meta, StoryObj } from '@storybook/react'

import AppLink from './AppLink'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
  title: 'shared/AppLink',
  component: AppLink,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppLink>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    children: 'Some link',
    to: '/somelink'
  },
  decorators: [RouterDecorator, StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    children: 'Some link',
    to: '/somelink'
  },
  decorators: [RouterDecorator, StoryDecorator, ThemeDecorator(Theme.DARK)]
}
