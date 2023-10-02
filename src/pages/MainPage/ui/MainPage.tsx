import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const MainPage = memo(() => {
  const { t } = useTranslation('main')

  return (
    <div>
      <h1>{t('mainPageTitle')}</h1>
    </div>
  )
})

export default MainPage
