import type { Meta, StoryObj } from '@storybook/react'

import NotFoundPage from './NotFoundPage'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'pages/NotFoundPage',
  component: NotFoundPage,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof NotFoundPage>

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
