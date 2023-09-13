import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileAvatar = (state: StateSchema) => state.profile?.data?.avatar ?? ''
