import type { Meta, StoryObj } from '@storybook/react'

import CustomQuoteRenderer from './CustomQuoteRenderer'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'widgets/TextEditorOutput/CustomQuoteRenderer',
  component: CustomQuoteRenderer,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CustomQuoteRenderer>

export default meta
type Story = StoryObj<typeof meta>

const data = {
  text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.',
  caption: 'This is a caption'
}

export const Light: Story = {
  args: {
    data
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    data
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
