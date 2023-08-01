import cls from './Navbar.module.scss';

import {ThemeSwitcher} from "entities/ThemeSwitcher";
import {classNames} from "shared/lib/classNames/classNames";
import AppLink from "shared/ui/AppLink/AppLink";
import {AppDropdown} from "shared/ui/AppDropdown/AppDropdown";
import {HeaderLogoIcon} from "shared/assets/icons";
import {useTheme} from "app/providers/ThemeProvider";
import {Search} from "features/Search";
import {ProfileIconLink} from "entities/ProfileIconLink";
import {BasketIconLink} from "entities/BasketIconLink";
import {getIconColorByTheme} from "shared/lib/getMainColorByTheme/getIconColorByTheme";

interface NavbarDropdownItem {
  text: string;
  path: string;
}

interface NavbarDropdown {
  title: string;
  items: NavbarDropdownItem[];
}

export interface NavbarDropdownsConfig {
  items: NavbarDropdown[];
}

interface NavbarProps {
  dropdownsConfig: NavbarDropdownsConfig,
  className?: string;
}

export default function Navbar({dropdownsConfig, className}: NavbarProps) {
  const {theme} = useTheme();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppLink className={cls.navbarLogo} to={'/'}>
        <HeaderLogoIcon color={getIconColorByTheme(theme)} />
      </AppLink>

      <nav className={cls.navbarNav}>
        {dropdownsConfig.items.map((dropdown) => (
          <li key={dropdown.title}>
            <AppDropdown title={dropdown.title}>
              {dropdown.items.map((dropDownItem) => (
                <li key={dropDownItem.path}>
                  <AppLink
                    className={cls.navbarDropdownItem}
                    to={dropDownItem.path}
                  >
                    {dropDownItem.text}
                  </AppLink>
                </li>
              ))}
            </AppDropdown>
          </li>
        ))}
      </nav>

      <div className={cls.navbarActionButtons}>
        <div><Search /></div>
        <div><ThemeSwitcher /></div>
        <div><ProfileIconLink /></div>
        <div><BasketIconLink /></div>
      </div>
    </div>
  );
}
