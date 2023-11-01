import type { Meta, StoryObj } from '@storybook/react'

import CustomHeaderRenderer from './CustomHeaderRenderer'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'widgets/TextEditorOutput/CustomHeaderRenderer',
  component: CustomHeaderRenderer,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CustomHeaderRenderer>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    data: {
      text: 'This is a title',
      level: 2
    }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    data: {
      text: 'This is a title',
      level: 2
    }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
