import { type SearchDropdown } from 'features/Search/ui/Search'

export interface NavbarDropdownItem {
  text: string
  path: string
}

export interface NavbarDropdown {
  title: string
  items: NavbarDropdownItem[]
}

export interface NavbarDropdownsConfig {
  items: NavbarDropdown[]
}

export interface NavbarProps {
  navigationDropdownsConfig: NavbarDropdownsConfig
  searchDropdownConfig: SearchDropdown
  className?: string
}
