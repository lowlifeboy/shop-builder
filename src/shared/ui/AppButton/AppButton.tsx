import cls from './AppButton.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {forwardRef, ReactNode} from "react";

interface AppButtonProps {
  onClick: () => void;
  children: ReactNode;
  className?: string;
}

const AppButton = forwardRef<HTMLButtonElement, AppButtonProps>((
  {className, children, onClick},
  ref
) => {
  return (
    <button ref={ref} className={classNames(cls.appButton, {}, [className])} onClick={onClick}>
      {children}
    </button>
  );
})

export default AppButton;
