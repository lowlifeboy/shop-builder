import {ReactNode, useEffect, useState} from "react";

import cls from './AppSelector.module.scss';

import {useTheme} from "app/providers/ThemeProvider";
import {classNames} from "shared/lib/classNames/classNames";
import {ArrowDownIcon} from "shared/assets/icons";
import {getIconColorByTheme} from "shared/lib/getMainColorByTheme/getIconColorByTheme";
import AppButton from "shared/ui/AppButton/AppButton";

interface AppSelectorProps<T> {
  keyPropName: string;
  config: T[];
  defaultValue: T;
  itemRender: (value: T) => ReactNode;
  onChange: (value: T) => void;
  className?: string;
  openDirection?: 'up' | 'down';
  openPosition?: 'left' | 'right';
}

export default function AppSelector<T>({
 keyPropName,
 config,
 defaultValue,
 itemRender,
 onChange,
 className,
 openDirection = 'down',
 openPosition = 'left'
}: AppSelectorProps<T>) {
  const {theme} = useTheme();

  const [selectedItem, setSelectedItem] = useState<T>();

  useEffect(() => {
    setSelectedItem(defaultValue);
  }, []);

  function handleSelect(item: T) {
    setSelectedItem(item);
    onChange(item);
  }

  return (
    <div className={classNames(cls.appSelector, {}, [className])}>
      <div className={cls.appSelectorSelectedItem}>
        <div className={cls.appSelectorSelectedItemWrapper}>
          {itemRender(selectedItem)}
        </div>
        <ArrowDownIcon color={getIconColorByTheme(theme)} />
      </div>

      <ul
        className={cls.appSelectorDropdown}
        style={{
          top: openDirection === 'up' ? -config.length * 40 : 24,
          ...(openPosition === 'right' ? {right: 0} : {left: 0})
        }}
      >
        {config.map((item) => (
          // @ts-ignore
          <li key={item[keyPropName]} className={cls.appSelectorDropdownItem}>
            <AppButton className={cls.appSelectorDropdownButton} onClick={() => handleSelect(item)} >{itemRender(item)}</AppButton>
          </li>
        ))}
      </ul>
    </div>
  );
}
