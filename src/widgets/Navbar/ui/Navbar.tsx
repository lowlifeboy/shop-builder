import cls from './Navbar.module.scss';

import {classNames} from "shared/lib/classNames/classNames";
import AppLink from "shared/ui/AppLink/AppLink";
import {AppDropdown} from "shared/ui/AppDropdown/AppDropdown";
import {useTheme} from "app/providers/ThemeProvider";

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
  const {toggleTheme} = useTheme();

  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <AppLink
        className={cls.navbarLogo}
        to={'/'}
      >
        <img src="https://nayzak.design/wp-content/uploads/2022/11/nayzay-design-logo-1.svg" alt="Nayzak Design"/>
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

      <button onClick={toggleTheme}>Toggle theme</button>
    </div>
  );
}
