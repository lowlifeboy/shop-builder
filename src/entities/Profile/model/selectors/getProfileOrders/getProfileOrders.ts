import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileOrders = (state: StateSchema) => state.profile?.data?.orders ?? []
