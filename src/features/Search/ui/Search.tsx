import cls from './Search.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import AppInput from 'shared/ui/AppInput/AppInput'
import AppButton from 'shared/ui/AppButton/AppButton'
import { useToggle } from 'shared/lib/useToggle/useToggle'
import { AppDropdownSearch } from 'shared/ui/AppDropdownSearch/AppDropdownSearch'
import AppLink from 'shared/ui/AppLink/AppLink'
import { SearchIcon } from 'shared/assets/icons'

interface SearchDropdownItem {
  text: string
  path: string
}

export interface SearchDropdown {
  title: string
  items: SearchDropdownItem[]
}

interface SearchProps {
  config: SearchDropdown
  className?: string
}

// TODO: complete Search component
export default function Search ({ config, className }: SearchProps) {
  const { opened, toggle } = useToggle()

  function handleSearch (value: string) {
    console.log('handleSearch', value)
  }

  return (
    <div className={classNames(cls.searchWrapper, { [cls.opened]: opened }, [className])}>
      <div className={cls.search}>
        <AppInput onChange={handleSearch} debounceTimeMS={500} />
        <AppButton onClick={toggle}><SearchIcon className={cls.searchIcon} /></AppButton>
      </div>

      {opened && (
        <AppDropdownSearch title={config.title}>
          {config.items.map((dropDownItem) => (
            <li key={dropDownItem.path} className={cls.searchDropdownItem}>
              <AppLink to={dropDownItem.path}>{dropDownItem.text}</AppLink>
            </li>
          ))}
        </AppDropdownSearch>
      )}
    </div>
  )
}
