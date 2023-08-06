import cls from './LanguageSelector.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppSelector from 'shared/ui/AppSelector/AppSelector'
import i18n from 'shared/config/i18n/i18n'

export interface Language {
  id: string
  key: string
  name: string
  emoji: string
}

interface LanguageSelectorProps {
  config: Language[]
  className?: string
  openDirection?: 'up' | 'down'
  openPosition?: 'left' | 'right'
}

function LanguageItem (item: Language) {
  return (
    <div className={cls.languageItem}>
      <div className={cls.emoji}>{item.emoji}</div>
      <div className={cls.name}>{item.name}</div>
    </div>
  )
}

export default function LanguageSelector ({ openDirection, config, className, openPosition }: LanguageSelectorProps) {
  function onChange (item: Language) {
    void i18n.changeLanguage(item.key)
  }

  return (
    <div className={classNames(cls.languageSelector, {}, [className ?? ''])}>
      <AppSelector
        keyPropName={'id'}
        config={config}
        defaultValue={config.find((item) => item.key === i18n.language) ?? config[0]}
        onChange={onChange}
        itemRender={(item) => <LanguageItem id={item.id} name={item.name} key={item.key} emoji={item.emoji} />}
        openDirection={openDirection}
        openPosition={openPosition}
      />
    </div>
  )
}
