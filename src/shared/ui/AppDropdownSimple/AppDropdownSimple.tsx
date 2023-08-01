import cls from './AppDropdownSimple.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode} from "react";
import {ArrowDownIcon} from "shared/assets/icons";
import {useTheme} from "app/providers/ThemeProvider";
import {getIconColorByTheme} from "shared/lib/getMainColorByTheme/getIconColorByTheme";

interface AppDropdownSimpleProps {
  title: string;
  children: ReactNode;
  className?: string;
}

interface AppDropdownSimpleSelectedItemProps {
  title: string;
  active: boolean;
}

export function AppDropdownSimpleSelectedItem({title, active}: AppDropdownSimpleSelectedItemProps) {
  const {theme} = useTheme();

  return (
    <div className={cls.appDropdownSimpleSelectedItemWrapper}>
      <div className={cls.appDropdownSimpleSelectedItem}>
        <div>{title}</div>
        <div className={cls.iconWrapper}>
          <ArrowDownIcon color={getIconColorByTheme(theme)} rotate={active ? 180 : 0} />
        </div>
      </div>
    </div>
  );
}


export function AppDropdownSimple({className, children, title}: AppDropdownSimpleProps) {
  return (
    <div className={classNames(cls.appDropdownSimple, {}, [className])}>
      <AppDropdownSimpleSelectedItem title={title} active={true} />
      <ul className={cls.appDropdownSimpleList}>
        {children}
      </ul>
    </div>
  );
}
