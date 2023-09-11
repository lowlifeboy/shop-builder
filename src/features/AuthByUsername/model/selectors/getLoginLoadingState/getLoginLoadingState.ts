import { type StateSchema } from 'app/providers/StoreProvider'

export default function getLoginLoadingState (state: StateSchema) {
  return state.loginForm?.isLoading
}
