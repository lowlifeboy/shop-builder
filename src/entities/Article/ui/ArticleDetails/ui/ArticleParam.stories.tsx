import type { Meta, StoryObj } from '@storybook/react'

import ArticleParam, { type ArticleParamProps } from './ArticleParam'
import { Theme } from 'app/providers/ThemeProvider'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import BorderedStoryDecorator from 'shared/config/storybook/StoryDecorator/BorderedStoryDecorator'
import { ProfileIcon } from 'shared/assets/icons'

const meta = {
  title: 'entities/Article/ArticleDetails/ArticleParam',
  component: ArticleParam,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof ArticleParam>

export default meta
type Story = StoryObj<typeof meta>

const args: ArticleParamProps = {
  Icon: () => <ProfileIcon height={18} />,
  text: 'name 1'
}

export const Light: Story = {
  args,
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args,
  decorators: [BorderedStoryDecorator, ThemeDecorator(Theme.DARK)]
}
