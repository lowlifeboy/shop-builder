import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileDisplayName = (state: StateSchema) => state.profile?.data?.displayName ?? ''
