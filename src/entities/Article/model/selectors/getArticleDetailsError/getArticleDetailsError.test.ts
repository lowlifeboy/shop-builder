import { type StateSchema } from 'app/providers/StoreProvider'
import { getArticleDetailsError } from './getArticleDetailsError'

describe('getArticleDetailsErrorTest', () => {
  it('should return error', () => {
    const state: DeepPartial<StateSchema> = {
      articleDetails: {
        error: 'error'
      }
    }
    expect(getArticleDetailsError(state as StateSchema)).toEqual('error')
  })

  it('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getArticleDetailsError(state as StateSchema)).toEqual(undefined)
  })
})
