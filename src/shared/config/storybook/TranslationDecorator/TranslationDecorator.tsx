import { I18nextProvider } from 'react-i18next'
import { Suspense } from 'react'
import i18n from 'shared/config/i18n/i18n'

export default function TranslationDecorator (Story: any) {
  return (
    <I18nextProvider i18n={i18n}>
      <Suspense fallback="Loading localization...">
        <Story />
      </Suspense>
    </I18nextProvider>
  )
}
