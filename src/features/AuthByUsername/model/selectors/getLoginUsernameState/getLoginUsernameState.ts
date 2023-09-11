import { type StateSchema } from 'app/providers/StoreProvider'

export default function getLoginUsernameState (state: StateSchema) {
  return state.loginForm?.username
}
