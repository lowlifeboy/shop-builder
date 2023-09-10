import { type StateSchema } from 'app/providers/StoreProvider'

export default function getLoginStates (state: StateSchema) {
  return state.loginForm
}
