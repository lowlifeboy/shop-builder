import { type StateSchema } from 'app/providers/StoreProvider'

export default function getLoginPasswordState (state: StateSchema) {
  return state.loginForm?.password
}
