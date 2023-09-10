import { type StateSchema } from 'app/providers/StoreProvider'

export default function getUserAuthData (state: StateSchema) {
  return state.user.authData
}
