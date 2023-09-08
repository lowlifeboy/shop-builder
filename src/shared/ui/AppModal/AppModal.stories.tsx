import type { Meta, StoryObj } from '@storybook/react'

import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import AppModal from 'shared/ui/AppModal/AppModal'

// eslint-disable-next-line i18next/no-literal-string
const testChildren = <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam aperiam autem beatae et ex exercitationem ipsa iste iusto laborum minima, necessitatibus nihil nulla, officiis porro quam quasi quis reiciendis soluta! Amet aperiam deleniti distinctio doloremque eius eveniet id inventore iste magni molestiae nihil ratione sapiente sunt tempore, unde veritatis vitae. At dicta dolore maiores molestias, nesciunt repellendus reprehenderit. Aliquam, architecto dignissimos ducimus exercitationem itaque odio vitae! Architecto commodi debitis excepturi illo magni porro possimus quod voluptatum. Asperiores, autem excepturi id magni nostrum numquam quia repudiandae sint ullam vero. Earum obcaecati optio quod rem tempore. Amet ducimus fugiat ipsa maxime temporibus!</p>

const meta = {
  title: 'shared/AppModal',
  component: AppModal,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppModal>

export default meta
type Story = StoryObj<typeof meta>

export const Light: Story = {
  args: {
    title: 'Modal title',
    isOpen: true,
    children: testChildren
  },
  decorators: [ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    title: 'Modal title',
    isOpen: true,
    children: testChildren
  },
  decorators: [ThemeDecorator(Theme.DARK)]
}
