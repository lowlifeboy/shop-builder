import type { Meta, StoryObj } from '@storybook/react'

import { AppDropdownSimple } from './AppDropdownSimple'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import { navigationDropdownsConfig } from 'widgets/Navbar/models/mocks'
import cls from 'features/Search/ui/Search.module.scss'
import AppLink from 'shared/ui/AppLink/AppLink'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
  title: 'shared/AppDropdownSimple',
  component: AppDropdownSimple,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppDropdownSimple>

export default meta
type Story = StoryObj<typeof meta>

function ItemsList () {
  return (
    <>
      {navigationDropdownsConfig.items[0].items.map((dropDownItem) => (
        <li key={dropDownItem.path}>
          <AppLink
            className={cls.navbarDropdownItem}
            to={dropDownItem.path}
          >
            {dropDownItem.text}
          </AppLink>
        </li>
      ))}
    </>
  )
}

export const Light: Story = {
  args: {
    title: 'AppDropdownSimple',
    children: <ItemsList />
  },
  decorators: [RouterDecorator, StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    title: 'AppDropdownSimple',
    children: <ItemsList />
  },
  decorators: [RouterDecorator, StoryDecorator, ThemeDecorator(Theme.DARK)]
}
