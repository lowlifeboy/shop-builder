import { useEffect, useState } from 'react'

import AppButton from 'shared/ui/AppButton/AppButton'
import { useTranslation } from 'react-i18next'

// Компонент для тестирования ErrorBoundary
export default function BugButton () {
  const { t } = useTranslation()

  const [error, setError] = useState(false)

  function toggleError () {
    setError(!error)
  }

  useEffect(() => {
    if (error) {
      throw new Error()
    }
  }, [error])

  return (
    <AppButton onClick={toggleError}>
      {t('throwError')}
    </AppButton>
  )
}
