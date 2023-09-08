import { useTranslation } from 'react-i18next'

import { Counter } from 'entities/Counter'
import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'
import { useState } from 'react'

export default function MainPage () {
  const { t } = useTranslation('main')

  const [value, setValue] = useState('')

  const onChange = (value: string) => {
    console.log(value)
    setValue(value)
  }

  return (
    <div>
      <h1>{t('mainPageTitle')}</h1>
      <Counter />
      <AppInput autofocus theme={AppInputTheme.UNDERLINED} value={value} onChange={onChange} />
    </div>
  )
}
