import './styles/index.scss';

import {classNames} from "shared/lib/classNames/classNames";
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {NavbarDropdownsConfig} from "widgets/Navbar/ui/Navbar";
import {Footer} from "widgets/Footer";

const dropdownsConfig: NavbarDropdownsConfig = {
  items: [
    {
      title: 'Home',
      items: [
        {text: 'Home page 1', path: '/'},
        {text: 'Home page 2', path: '/'},
        {text: 'Home page 3', path: '/'},
      ]
    },
    {
      title: 'Shop',
      items: [
        {text: 'Shop page 1', path: '/'},
        {text: 'Shop page 2', path: '/'},
        {text: 'Shop page 3', path: '/'},
      ]
    },
    {
      title: 'Product',
      items: [
        {text: 'Product page 1', path: '/'},
        {text: 'Product page 2', path: '/'},
        {text: 'Product page 3', path: '/'},
      ]
    },
    {
      title: 'Pages',
      items: [
        {text: 'Page 1', path: '/'},
        {text: 'Page 2', path: '/'},
        {text: 'Page 3', path: '/'},
      ]
    }
  ]
}

export default function App() {
  const {theme} = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar dropdownsConfig={dropdownsConfig} />
      <main>
        <AppRouter />
      </main>
      <Footer />
    </div>
  )
}
