import { type FC, lazy } from 'react'

import { type LogoutFormProps } from 'features/AuthByUsername/ui/LogoutForm/LogoutForm'

export const LogoutFormAsync = lazy<FC<LogoutFormProps>>(async () => await import('./LogoutForm'))
