import type { Meta, StoryObj } from '@storybook/react'

import CustomListRenderer from './CustomListRenderer'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'widgets/TextEditorOutput/CustomListRenderer',
  component: CustomListRenderer,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CustomListRenderer>

const items = [
  '<b>Fruit-Inspired Prints:</b> Embrace the season with clothing featuring fruity patterns like watermelons, pineapples, or lemons.',
  '<b>Colorful Prints:</b> Bring a vibrant palette to your wardrobe with vibrant prints like vibrant oranges, vibrant yellows, or vibrant purples.',
  '<b>Floral Prints:</b> Add a touch of femininity to your wardrobe with floral prints like roses, lilies, or sunflowers.',
  '<b>Maxi Dresses:</b> Make sure you have a few comfortable and stylish maxi dresses for those scorching days.',
  '<b>Maxi Skirts:</b> Elevate your style with maxi skirts that are both stylish and comfortable.'
]

export default meta
type Story = StoryObj<typeof meta>

export const OrderedLight: Story = {
  args: {
    id: '1',
    type: 'list',
    data: {
      style: 'ordered',
      items
    }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const OrderedDark: Story = {
  args: {
    id: '2',
    type: 'list',
    data: {
      style: 'ordered',
      items
    }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}

export const UnorderedLight: Story = {
  args: {
    id: '3',
    type: 'list',
    data: {
      style: 'unordered',
      items
    }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const UnorderedDark: Story = {
  args: {
    id: '4',
    type: 'list',
    data: {
      style: 'unordered',
      items
    }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
