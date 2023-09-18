import { type StateSchema } from 'app/providers/StoreProvider'

export default function getProfileForm (state: StateSchema) {
  return state.profile?.form
}
