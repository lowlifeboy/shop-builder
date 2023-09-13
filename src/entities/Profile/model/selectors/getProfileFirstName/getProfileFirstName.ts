import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileFirstName = (state: StateSchema) => state.profile?.data?.firstName ?? ''
