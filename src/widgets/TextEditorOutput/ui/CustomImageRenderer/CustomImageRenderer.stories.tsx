import type { Meta, StoryObj } from '@storybook/react'

import CustomImageRenderer from './CustomImageRenderer'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'widgets/TextEditorOutput/CustomImageRenderer',
  component: CustomImageRenderer,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CustomImageRenderer>

export default meta
type Story = StoryObj<typeof meta>

const defaultData = {
  caption: 'This is an image caption',
  stretched: false,
  url: 'https://cdn.pixabay.com/photo/2017/03/28/12/11/chairs-2181960_960_720.jpg',
  withBorder: false,
  withBackground: false
}

export const DefaultLight: Story = {
  args: {
    data: defaultData
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const DefaultDark: Story = {
  args: {
    data: defaultData
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const StretchedLight: Story = {
  args: {
    data: { ...defaultData, stretched: true }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const StretchedDark: Story = {
  args: {
    data: { ...defaultData, stretched: true }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const StretchedWithBorderLight: Story = {
  args: {
    data: { ...defaultData, stretched: true, withBorder: true }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const StretchedWithBorderDark: Story = {
  args: {
    data: { ...defaultData, stretched: true, withBorder: true }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const StretchedWithBorderAndBackgroundLight: Story = {
  args: {
    data: { ...defaultData, stretched: true, withBorder: true, withBackground: true }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const StretchedWithBorderAndBackgroundDark: Story = {
  args: {
    data: { ...defaultData, stretched: true, withBorder: true, withBackground: true }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
