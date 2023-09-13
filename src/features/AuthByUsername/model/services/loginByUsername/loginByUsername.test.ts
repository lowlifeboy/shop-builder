import { loginByUsername } from './loginByUsername'
import { userActions } from 'entities/User'
import { TestAsyncThunk } from 'shared/lib/tests/TestAsyncThunk/TestAsyncThunk'

describe('loginByUsernameTest', () => {
  // Create mock dispatch and getState
  // let dispatch: Dispatch
  // let getState: () => StateSchema

  // Create initial state
  // beforeEach(() => {
  //   dispatch = jest.fn()
  //   getState = jest.fn()
  // })

  // it('success login', async () => {
  //   const userValue = { username: 'testUsername', id: '1' }
  //
  //   // Mock axios success response
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
  //   const action = loginByUsername({ username: 'testUsername', password: '123456', rememberMe: true })
  //   const result = await action(dispatch, getState, undefined)
  //
  //   // Check result
  //   // Check request to API has been called
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   // Check dispatch has been called 3 times (loginByUsername, userActions.setAuthData, return result)
  //   expect(dispatch).toHaveBeenCalledTimes(3)
  //   // Check dispatch has been called with correct arguments
  //   expect(dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
  //   // Check result status
  //   expect(result.meta.requestStatus).toBe('fulfilled')
  //   // Check result payload
  //   expect(result.payload).toBe(userValue)
  // })
  //
  // it('error login', async () => {
  //   mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
  //   const action = loginByUsername({ username: 'testUsername', password: '123456', rememberMe: true })
  //   const result = await action(dispatch, getState, undefined)
  //
  //   expect(dispatch).toHaveBeenCalledTimes(2)
  //   expect(mockedAxios.post).toHaveBeenCalled()
  //   expect(result.meta.requestStatus).toBe('rejected')
  //   expect(result.payload).toBe('error')
  // })

  it('success login', async () => {
    const userValue = { username: 'testUsername', id: '1' }

    // Mock axios success response

    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))

    const result = await thunk.callThunk({ username: 'testUsername', password: '123456', rememberMe: true })

    // Check result
    // Check request to API has been called
    expect(thunk.api.post).toHaveBeenCalled()
    // Check dispatch has been called 3 times (loginByUsername, userActions.setAuthData, return result)
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    // Check dispatch has been called with correct arguments
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.setAuthData(userValue))
    // Check result status
    expect(result.meta.requestStatus).toBe('fulfilled')
    // Check result payload
    expect(result.payload).toBe(userValue)
  })

  it('error login', async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: 'testUsername', password: '123456', rememberMe: true })

    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe('rejected')
    expect(result.payload).toBe('error')
  })
})
