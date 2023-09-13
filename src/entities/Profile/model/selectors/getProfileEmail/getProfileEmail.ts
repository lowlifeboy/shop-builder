import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileEmail = (state: StateSchema) => state.profile?.data?.email ?? ''
