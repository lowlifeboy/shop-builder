import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/Counter'

export default function AboutPage () {
  const { t } = useTranslation('about')

  return (
    <div>
      <h1>{t('aboutPageTitle')}</h1>
      <Counter />
    </div>
  )
}
