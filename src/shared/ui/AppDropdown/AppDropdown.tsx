import cls from './AppDropdown.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode} from "react";
import {ArrowDownIcon} from "shared/assets/icons";
import {useTheme} from "app/providers/ThemeProvider";
import {getIconColorByTheme} from "shared/lib/getMainColorByTheme/getIconColorByTheme";

interface AppDropdownProps {
  title: string;
  children: ReactNode;
  className?: string;
}

interface AppDropdownSelectedItemProps {
  title: string;
  active: boolean;
}

export function AppDropdownSelectedItem({title, active}: AppDropdownSelectedItemProps) {
  const {theme} = useTheme();

  return (
    <div className={cls.appDropdownSelectedItemWrapper}>
      <div className={cls.appDropdownSelectedItem}>
        <div>{title}</div>
        <div className={cls.iconWrapper}>
          <ArrowDownIcon color={getIconColorByTheme(theme)} rotate={active ? 180 : 0} />
        </div>
      </div>
    </div>
  );
}


export function AppDropdown({className, children, title}: AppDropdownProps) {
  return (
    <div className={classNames(cls.appDropdown, {}, [className])}>
      <AppDropdownSelectedItem title={title} active={true} />
      <ul className={cls.appDropdownList}>
        {children}
      </ul>
    </div>
  );
}
