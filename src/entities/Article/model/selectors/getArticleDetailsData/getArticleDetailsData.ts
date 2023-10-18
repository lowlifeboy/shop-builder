import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsData = (state: StateSchema) => state.articleDetails?.data
