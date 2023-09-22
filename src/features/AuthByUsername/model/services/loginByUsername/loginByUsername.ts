import { createAsyncThunk } from '@reduxjs/toolkit'

import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'
import { type ThunkConfig } from 'app/providers/StoreProvider'
import { ProfileRoutePath, ProfileRoutes } from 'shared/config/routeConfig/routeConfig'

interface LoginByUsernameProps {
  username: string
  password: string
  rememberMe: boolean
}

export const loginByUsername = createAsyncThunk<
User,
LoginByUsernameProps,
ThunkConfig<string>
>(
  'login/loginByUsername',
  async (data, thunkAPI) => {
    const { extra, dispatch, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.post<User>('/login', data)

      if (!response.data) {
        return rejectWithValue('error')
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      dispatch(userActions.setAuthData(response.data))
      extra.navigate?.(ProfileRoutePath[ProfileRoutes.PROFILE_DASHBOARD])

      return response.data
    } catch (e) {
      return rejectWithValue('loginError')
    }
  })
