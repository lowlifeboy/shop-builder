import type { Meta, StoryObj } from '@storybook/react'

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import Footer from './Footer'
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
  title: 'widgets/Footer',
  component: Footer,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {},
  decorators: [RouterDecorator, StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {},
  decorators: [RouterDecorator, StoryDecorator, ThemeDecorator(Theme.DARK)]
}
