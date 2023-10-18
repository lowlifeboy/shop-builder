import type { Meta, StoryObj } from '@storybook/react'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import AppSkeleton from './AppSkeleton'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'shared/AppSkeleton',
  component: AppSkeleton,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppSkeleton>

export default meta
type Story = StoryObj<typeof meta>

export const LightNormal: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const LightCircle: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const DarkNormal: Story = {
  args: {
    width: '100%',
    height: 200
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const DarkCircle: Story = {
  args: {
    width: 100,
    height: 100,
    borderRadius: '50%'
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
