import { type StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsLoading } from './getArticleDetailsLoading'

describe('getArticleDetailsLoadingTest', () => {
  it('should return true', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        isLoading: true
      }
    }
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(true)
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsLoading(state as StateSchema)).toEqual(undefined)
  })
})
