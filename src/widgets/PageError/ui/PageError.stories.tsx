import type { Meta, StoryObj } from '@storybook/react'

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import PageError from './PageError'

const meta = {
  title: 'widgets/PageError',
  component: PageError,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof PageError>

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
