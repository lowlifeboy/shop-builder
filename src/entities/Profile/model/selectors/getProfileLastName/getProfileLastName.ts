import { type StateSchema } from 'app/providers/StoreProvider'

export const getProfileLastName = (state: StateSchema) => state.profile?.form?.lastName ?? ''
