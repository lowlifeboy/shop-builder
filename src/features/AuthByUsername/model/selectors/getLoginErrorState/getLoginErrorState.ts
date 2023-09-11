import { type StateSchema } from 'app/providers/StoreProvider'

export default function getLoginErrorState (state: StateSchema) {
  return state.loginForm?.error
}
