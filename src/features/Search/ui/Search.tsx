import { memo, useMemo } from 'react'
import { useFormik } from 'formik'
import { useDebouncedCallback } from 'use-debounce'

import cls from './Search.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppInput } from 'shared/ui/AppInput/AppInput'
import AppButton from 'shared/ui/AppButton/AppButton'
import { useToggle } from 'shared/lib/hooks/useToggle/useToggle'
import { AppDropdownSearch } from 'shared/ui/AppDropdownSearch/AppDropdownSearch'
import AppLink from 'shared/ui/AppLink/AppLink'
import { SearchIcon } from 'shared/assets/icons'
import { validationSchema } from '../model/services/formValidation/serchForm'

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

export interface SearchFormState {
  search: string
}

const initialValues: SearchFormState = {
  search: ''
}

// TODO: complete Search component
const Search = memo(({ config, className }: SearchProps) => {
  const { opened, toggle } = useToggle()

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
    enableReinitialize: true
  })

  const debounced = useDebouncedCallback(
    async (field: string, value: string) => {
      console.log({ field, value })
    },
    1000
  )

  const itemsList = useMemo(() => {
    return config.items.map((dropDownItem) => (
      <li key={dropDownItem.path} className={cls.searchDropdownItem}>
        <AppLink to={dropDownItem.path}>{dropDownItem.text}</AppLink>
      </li>
    ))
  }, [config])

  return (
    <div className={classNames(cls.searchWrapper, { [cls.opened]: opened }, [className])}>
      <div className={cls.search}>
        <AppInput
          name="search"
          value={formik.values.search}
          onChange={(e) => {
            formik.handleChange(e)
            void debounced('search', e.target.value)
          }}
        />
        <AppButton onClick={toggle}><SearchIcon className={cls.searchIcon} /></AppButton>
      </div>

      {opened && (
        <AppDropdownSearch title={config.title}>
          {itemsList}
        </AppDropdownSearch>
      )}
    </div>
  )
})

export default Search
