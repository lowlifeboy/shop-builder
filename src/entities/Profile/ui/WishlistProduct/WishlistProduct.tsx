import { memo } from 'react'
import { useTranslation } from 'react-i18next'

import cls from './WishlistProduct.module.scss'

import { classNames } from 'shared/lib/classNames/classNames'
import { type ProductProperties } from 'entities/Profile'
import AppButton, { AppButtonFillTheme, AppButtonSize, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { TrashIcon } from 'shared/assets/icons'

interface WishlistProductProps {
  id: string
  title: string
  price: number
  preview: string
  properties: ProductProperties
  className?: string
}

const WishlistProduct = memo(({ id, title, price, preview, properties, className }: WishlistProductProps) => {
  const { t } = useTranslation()

  const selectOptions = () => {
    console.log('selectOptions')
  }

  const remove = () => {
    console.log('remove')
  }

  return (
    <div className={classNames(cls.wishlistProduct, {}, [className])}>
      <div className={cls.preview}>
        <img src={preview} alt={title} />
      </div>

      <div className={cls.info}>
        <div className={cls.mainInfo}>
          <div className={cls.title}>{title}</div>
          <div className={cls.properties}>
            {Object.keys(properties).map((key, index) => {
              const title = key.charAt(0).toUpperCase() + key.slice(1)
              const value = properties[key as keyof ProductProperties] ?? ''
              const propertyText = `${title}: ${value}${index !== Object.keys(properties).length - 1 ? ', ' : ''}`

              return (
                <span
                  key={key}
                  className={cls.property}
                  title={propertyText}
                >
                  {propertyText}
                </span>
              )
            })}
          </div>
          <AppButton
            onClick={remove}
            theme={AppButtonTheme.CLEAR}
            size={AppButtonSize.S}
            className={cls.removeButton}
          >
            <TrashIcon />
            <span>{t('remove')}</span>
          </AppButton>
        </div>

        <div className={cls.rightPart}>
          <div className={cls.price}>${price}</div>

          <AppButton
            onClick={selectOptions}
            theme={AppButtonTheme.SHARP}
            fillTheme={AppButtonFillTheme.OUTLINE}
            size={AppButtonSize.M}
            className={cls.selectButton}
          >
            {t('selectOptions')}
          </AppButton>
        </div>
      </div>
    </div>
  )
})

export default WishlistProduct
