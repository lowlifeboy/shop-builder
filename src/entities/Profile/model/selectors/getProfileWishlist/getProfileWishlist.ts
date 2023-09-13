import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileWishlist = (state: StateSchema) => state.profile?.data?.wishlist ?? []
