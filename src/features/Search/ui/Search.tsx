import cls from './Search.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import AppInput from "shared/ui/AppInput/AppInput";
import AppButton from "shared/ui/AppButton/AppButton";
import {useToggle} from "shared/lib/useToggle/useToggle";
import {SearchIcon} from "shared/assets/icons";
import {useTheme} from "app/providers/ThemeProvider";
import {getIconColorByTheme} from "shared/lib/getMainColorByTheme/getIconColorByTheme";

interface SearchProps {
  className?: string;
}

// TODO: complete Search component
export default function Search({className}: SearchProps) {
  const {theme} = useTheme();
  const {opened, toggle} = useToggle();

  function handleSearch(value: string) {
    console.log('handleSearch', value);
  }

  return (
    <div className={classNames(cls.searchWrapper, {opened}, [className])}>
      <div className={cls.search}>
        <AppInput onChange={handleSearch} debounceTimeMS={500} />
        <AppButton onClick={toggle} ><SearchIcon color={getIconColorByTheme(theme)} /></AppButton>
      </div>
    </div>
  );
}
