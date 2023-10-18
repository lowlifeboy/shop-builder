import { type StateSchema } from 'app/providers/StoreProvider'

export const getArticleDetailsLoading = (state: StateSchema) => state.articleDetails?.isLoading
