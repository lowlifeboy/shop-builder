import {ReactNode} from "react";
import {Link, LinkProps} from "react-router-dom";

import cls from './AppLink.module.scss';

import {classNames} from "shared/lib/classNames/classNames";

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

export interface AppLinkProps extends LinkProps {
  children: ReactNode;
  theme?: AppLinkTheme;
  className?: string;
}

export default function AppLink(props: AppLinkProps) {
  const {
    to,
    children,
    className,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props;

  return (
    <Link to={to} className={classNames(cls.appLink, {}, [className, cls[theme]])} {...otherProps}>
      {children}
    </Link>
  );
}
