import { loginActions, loginReducer } from '../slice/loginSlice'
import { type LoginSchema } from '../types/loginSchema'

describe('loginSliceTest', () => {
  it('test set username', () => {
    const state: DeepPartial<LoginSchema> = {
      username: ''
    }

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setUsername('123'))
    ).toEqual({ username: '123' })
  })

  it('test set password', () => {
    const state: DeepPartial<LoginSchema> = {
      password: ''
    }

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setPassword('123'))
    ).toEqual({ password: '123' })
  })

  it('test set rememberMe', () => {
    const state: DeepPartial<LoginSchema> = {
      rememberMe: false
    }

    expect(loginReducer(
      state as LoginSchema,
      loginActions.setRememberMe(true))
    ).toEqual({ rememberMe: true })
  })
})
