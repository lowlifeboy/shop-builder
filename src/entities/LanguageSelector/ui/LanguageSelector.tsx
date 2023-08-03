import cls from './LanguageSelector.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import AppSelector from "shared/ui/AppSelector/AppSelector";
import {LOCAL_STORAGE_LANGUAGE_KEY} from "../model/constants";

export interface Language {
  id: string;
  name: string;
  emoji: string;
}

interface LanguageSelectorProps {
  config: Language[];
  className?: string;
  openDirection?: 'up' | 'down';
  openPosition?: 'left' | 'right';
}

function LanguageItem(item: Language) {
  return (
    <div className={cls.languageItem}>
      <div className={cls.emoji}>{item.emoji}</div>
      <div className={cls.name}>{item.name}</div>
    </div>
  );
}

export default function LanguageSelector({openDirection, config, className, openPosition}: LanguageSelectorProps) {
  function onChange(item: Language) {
    localStorage.setItem(LOCAL_STORAGE_LANGUAGE_KEY, item.id);
  }

  return (
    <div className={classNames(cls.languageSelector, {}, [className])}>
      <AppSelector
        keyPropName={'id'}
        config={config}
        defaultValue={config.find((item) => item.id === localStorage.getItem(LOCAL_STORAGE_LANGUAGE_KEY)) || config[0]}
        onChange={onChange}
        itemRender={(item) => <LanguageItem {...item} />}
        openDirection={openDirection}
        openPosition={openPosition}
      />
    </div>
  );
}
