import type { Meta, StoryObj } from '@storybook/react'

import { AppDropdownSearch } from './AppDropdownSearch'
import { searchDropdownConfig } from 'widgets/Navbar/models/mocks'
import cls from 'features/Search/ui/Search.module.scss'
import AppLink from 'shared/ui/AppLink/AppLink'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'
import RouterDecorator from 'shared/config/storybook/RouterDecorator/RouterDecorator'

const meta = {
  title: 'shared/AppDropdownSearch',
  component: AppDropdownSearch,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppDropdownSearch>

export default meta
type Story = StoryObj<typeof meta>

function ItemsList () {
  return (
    <>
      {searchDropdownConfig.items.map((dropDownItem) => (
        <li key={dropDownItem.path} className={cls.searchDropdownItem}>
          <AppLink to={dropDownItem.path}>{dropDownItem.text}</AppLink>
        </li>
      ))}
    </>
  )
}

export const Light: Story = {
  args: {
    title: 'AppDropdownSearch',
    children: <ItemsList />
  },
  decorators: [RouterDecorator, StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    title: 'AppDropdownSearch',
    children: <ItemsList />
  },
  decorators: [RouterDecorator, StoryDecorator, ThemeDecorator(Theme.DARK)]
}
