import type { Meta, StoryObj } from '@storybook/react'

import CustomDelimiterRenderer from './CustomDelimiterRenderer'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'widgets/TextEditorOutput/CustomDelimiterRenderer',
  component: CustomDelimiterRenderer,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CustomDelimiterRenderer>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {},
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
