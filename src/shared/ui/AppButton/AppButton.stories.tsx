import type { Meta, StoryObj } from '@storybook/react'

import AppButton, { ThemeButton } from './AppButton'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'shared/AppButton',
  component: AppButton,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppButton>

export default meta
type Story = StoryObj<typeof meta>

export const Clear: Story = {
  args: {
    theme: ThemeButton.CLEAR,
    children: 'Button'
  }
}

export const Pill: Story = {
  args: {
    theme: ThemeButton.PILL,
    children: 'Button'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Rounded: Story = {
  args: {
    theme: ThemeButton.ROUNDED,
    children: 'Button'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Sharp: Story = {
  args: {
    theme: ThemeButton.SHARP,
    children: 'Button'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const PillDark: Story = {
  args: {
    theme: ThemeButton.PILL,
    children: 'Button'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const RoundedDark: Story = {
  args: {
    theme: ThemeButton.ROUNDED,
    children: 'Button'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const SharpDark: Story = {
  args: {
    theme: ThemeButton.SHARP,
    children: 'Button'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
