import cls from './AppDropdownSearch.module.scss';

import {classNames} from "../../lib/classNames/classNames";
import {ReactNode} from "react";

interface AppDropdownSearchProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export function AppDropdownSearch({className, children, title}: AppDropdownSearchProps) {
  return (
    <div className={classNames(cls.appDropdownSearch, {}, [className])}>
      <div className={cls.appDropdownSearchTitle}>{title}</div>
      <ul className={cls.appDropdownSearchList}>
        {children}
      </ul>
    </div>
  );
}
