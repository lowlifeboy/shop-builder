import type { Meta, StoryObj } from '@storybook/react'

import AppErrorText from './AppErrorText'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'shared/AppErrorText',
  component: AppErrorText,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppErrorText>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    text: 'You have entered an invalid username or password'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    text: 'You have entered an invalid username or password'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
