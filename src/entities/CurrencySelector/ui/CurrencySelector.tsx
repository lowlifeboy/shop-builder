import cls from './CurrencySelector.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import AppSelector from "shared/ui/AppSelector/AppSelector";
import {LOCAL_STORAGE_CURRENCY_KEY} from "../model/constants";

export interface Currency {
  id: string;
  name: string;
}

interface CurrencySelectorProps {
  config: Currency[];
  className?: string;
  openDirection?: 'up' | 'down';
  openPosition?: 'left' | 'right';
}

function CurrencyItem(item: Currency) {
  return (
    <div className={cls.currencyItem}>{item.name}</div>
  );
}

export default function CurrencySelector({openDirection, config, className, openPosition}: CurrencySelectorProps) {
  function onChange(item: Currency) {
    localStorage.setItem(LOCAL_STORAGE_CURRENCY_KEY, item.id);
  }

  return (
    <div className={classNames(cls.currencySelector, {}, [className])}>
      <AppSelector
        keyPropName={'id'}
        config={config}
        defaultValue={config.find((item) => item.id === localStorage.getItem(LOCAL_STORAGE_CURRENCY_KEY)) || config[0]}
        onChange={onChange}
        itemRender={(item) => <CurrencyItem {...item} />}
        openDirection={openDirection}
        openPosition={openPosition}
      />
    </div>
  );
}
