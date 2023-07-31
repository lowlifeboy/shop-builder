import cls from './AppDropdown.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {ReactNode, useRef} from "react";
import {useToggle} from "shared/lib/useToggle/useToggle";
import AppButton from "shared/ui/AppButton/AppButton";
import {useClickOutside} from "shared/lib/useClickOutside/useClickOutside";
import {useClickInside} from "shared/lib/useClickInside/useClickInside";
import {ArrowDownIcon} from "app/assets/icons";

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
  return (
    <div className={classNames(cls.appDropdownSelectedItem, {}, [])}>
      <div>{title}</div>
      <div className={cls.iconWrapper}>
        <ArrowDownIcon rotate={active ? 180 : 0} />
      </div>
    </div>
  );
}


export function AppDropdown({className, children, title}: AppDropdownProps) {
  const {opened, toggle} = useToggle();

  const selectedValueFieldRef = useRef<HTMLButtonElement>(null);
  const optionsListRef = useRef<HTMLUListElement>(null);

  useClickOutside(optionsListRef, () => toggle(), selectedValueFieldRef.current);
  useClickInside(optionsListRef, () => toggle());

  return (
    <div className={classNames(cls.appDropdown, {}, [className])}>
      <AppButton onClick={toggle} children={<AppDropdownSelectedItem title={title} active={opened} />} ref={selectedValueFieldRef} />
      {opened && (
        <ul className={cls.appDropdownList} ref={optionsListRef}>
          {children}
        </ul>
      )}
    </div>
  );
}
