import { type ReactNode, useCallback, useEffect, useMemo, useState } from 'react'

import cls from './AppSelector.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { ArrowDownIcon } from 'shared/assets/icons'
import AppButton from 'shared/ui/AppButton/AppButton'

interface AppSelectorProps {
  keyPropName: string
  config: Array<Record<string, any>>
  defaultValue: Record<string, any>
  itemRender: (value: Record<string, any>) => ReactNode
  onChange: (value: Record<string, any>) => void
  className?: string
  openDirection?: 'up' | 'down'
  openPosition?: 'left' | 'right'
}

export default function AppSelector ({
  keyPropName,
  config,
  defaultValue,
  itemRender,
  onChange,
  className,
  openDirection = 'down',
  openPosition = 'left'
}: AppSelectorProps) {
  const [selectedItem, setSelectedItem] = useState<Record<string, any>>()

  useEffect(() => {
    setSelectedItem(defaultValue)
  }, [defaultValue])

  const handleSelect = useCallback((item: Record<string, any>) => {
    setSelectedItem(item)
    onChange(item)
  }, [onChange])

  const itemsList = useMemo(() => {
    return config.map((item) => {
      return (
        <li key={item[keyPropName]} className={cls.appSelectorDropdownItem}>
          <AppButton className={cls.appSelectorDropdownButton} onClick={() => { handleSelect(item) }} >{itemRender(item)}</AppButton>
        </li>
      )
    })
  }, [config, handleSelect, itemRender, keyPropName])

  return (
    <div className={classNames(cls.appSelector, {}, [className])}>
      <div className={cls.appSelectorSelectedItem}>
        <div className={cls.appSelectorSelectedItemWrapper}>
          {selectedItem && itemRender(selectedItem)}
        </div>
        <ArrowDownIcon className={cls.arrowDownIcon} />
      </div>

      <ul
        className={cls.appSelectorDropdown}
        style={{
          top: openDirection === 'up' ? -config.length * 40 : 24,
          ...(openPosition === 'right' ? { right: 0 } : { left: 0 })
        }}
      >
        {itemsList}
      </ul>
    </div>
  )
}
