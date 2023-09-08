import type { Meta, StoryObj } from '@storybook/react'

import AppCheckbox from './AppCheckbox'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'shared/AppCheckbox',
  component: AppCheckbox,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppCheckbox>

export default meta
type Story = StoryObj<typeof meta>

export const LightDefault: Story = {
  args: {
    title: 'Checkbox',
    checked: false
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const LightChecked: Story = {
  args: {
    title: 'Checkbox',
    checked: true
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const DarkDefault: Story = {
  args: {
    title: 'Checkbox',
    checked: false
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const DarkChecked: Story = {
  args: {
    title: 'Checkbox',
    checked: true
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
