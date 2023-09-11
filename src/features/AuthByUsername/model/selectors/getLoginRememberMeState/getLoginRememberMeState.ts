import { type StateSchema } from 'app/providers/StoreProvider'

export default function getLoginRememberMeState (state: StateSchema) {
  return state.loginForm?.rememberMe
}
