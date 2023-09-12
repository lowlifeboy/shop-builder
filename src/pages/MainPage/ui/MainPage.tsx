import { memo, useState } from 'react'
import { useTranslation } from 'react-i18next'

import { AppInput, AppInputTheme } from 'shared/ui/AppInput/AppInput'

const MainPage = memo(() => {
  const { t } = useTranslation('main')

  const [value, setValue] = useState('')

  const onChange = (value: string) => {
    console.log(value)
    setValue(value)
  }

  return (
    <div>
      <h1>{t('mainPageTitle')}</h1>
      <AppInput autofocus theme={AppInputTheme.UNDERLINED} value={value} onChange={onChange} />
    </div>
  )
})

export default MainPage
