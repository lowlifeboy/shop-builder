import cls from './AppButton.module.scss';

import {classNames} from "../../lib/classNames/classNames";
import {ButtonHTMLAttributes, forwardRef, ReactNode} from "react";

export enum ThemeButton {
  CLEAR = 'clear',

}

interface AppButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
  onClick: () => void;
  children: ReactNode;
  theme?: ThemeButton;
  className?: string;
}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>((
  props,
  ref
) => {
  const {
    className,
    theme = ThemeButton.CLEAR,
    children,
    onClick,
    ...otherProps
  } = props;

  return (
    <button
      ref={ref}
      className={classNames(cls.appButton, {}, [className, theme])}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
})

export default AppButton;
