import type { Meta, StoryObj } from '@storybook/react'

import CustomParagraphRenderer from './CustomParagraphRenderer'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'

const meta = {
  title: 'widgets/TextEditorOutput/CustomParagraphRenderer',
  component: CustomParagraphRenderer,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof CustomParagraphRenderer>

export default meta
type Story = StoryObj<typeof meta>

const text = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor eius expedita natus recusandae veniam? Blanditiis dicta, enim fugiat hic laboriosam molestias neque pariatur perferendis reiciendis, sapiente vel veniam, voluptas voluptatum? A accusamus aliquid aperiam aspernatur beatae cum debitis delectus deserunt dolor, ea eius est exercitationem facilis fuga in ipsum iste, itaque maxime mollitia necessitatibus nemo nihil nobis non nulla omnis placeat porro, possimus quia repellendus vero? Adipisci amet, animi atque blanditiis earum enim esse et illum iusto minus, necessitatibus, nemo officiis praesentium quis quisquam reiciendis suscipit vero voluptate.'

export const Light: Story = {
  args: {
    data: {
      text
    }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    data: {
      text
    }
  },
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
