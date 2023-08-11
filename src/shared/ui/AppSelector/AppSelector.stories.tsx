import type { Meta, StoryObj } from '@storybook/react'

import AppSelector from './AppSelector'
import ThemeDecorator from 'shared/config/storybook/ThemeDecorator/ThemeDecorator'
import { Theme } from 'app/providers/ThemeProvider'
import i18n from 'shared/config/i18n/i18nForTests'
import { type Language } from 'models/LanguageSelector/ui/LanguageSelector'
import cls from 'models/LanguageSelector/ui/LanguageSelector.module.scss'
import { languages } from 'widgets/Footer/model/mockData'
import StoryDecorator from 'shared/config/storybook/StoryDecorator/StoryDecorator'

const meta = {
  title: 'shared/AppSelector',
  component: AppSelector,
  tags: ['autodocs'],
  argTypes: {}
} satisfies Meta<typeof AppSelector>

export default meta
type Story = StoryObj<typeof meta>

function onChange (item: Language) {
  void i18n.changeLanguage(item.key)
}

function LanguageItem (item: Language) {
  return (
    <div className={cls.languageItem}>
      <div className={cls.emoji}>{item.emoji}</div>
      <div className={cls.name}>{item.name}</div>
    </div>
  )
}

export const Light: Story = {
  args: {
    keyPropName: 'id',
    config: languages,
    defaultValue: languages.find((item) => item.key === i18n.language) ?? languages[0],
    onChange,
    itemRender: (item) => <LanguageItem id={item.id} name={item.name} key={item.key} emoji={item.emoji} />,
    openDirection: 'down',
    openPosition: 'left'
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.LIGHT)]
}

export const Dark: Story = {
  args: {
    keyPropName: 'id',
    config: languages,
    defaultValue: languages.find((item) => item.key === i18n.language) ?? languages[0],
    onChange,
    itemRender: (item) => <LanguageItem id={item.id} name={item.name} key={item.key} emoji={item.emoji} />,
    openDirection: 'down',
    openPosition: 'left'
  },
  decorators: [StoryDecorator, ThemeDecorator(Theme.DARK)]
}
