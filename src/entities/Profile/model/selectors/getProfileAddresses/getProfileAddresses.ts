import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileAddresses = (state: StateSchema) => state.profile?.data?.addresses ?? []
