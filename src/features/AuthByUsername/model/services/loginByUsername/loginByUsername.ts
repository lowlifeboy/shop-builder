import axios from 'axios'
import { createAsyncThunk } from '@reduxjs/toolkit'

import { type User, userActions } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

interface LoginByUsernameProps {
  username: string
  password: string
  rememberMe: boolean
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
  'login/loginByUsername',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post<User>('http://localhost:8000/login', data)

      if (!response.data) {
        return thunkAPI.rejectWithValue('error')
      }

      localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
      thunkAPI.dispatch(userActions.setAuthData(response.data))

      return response.data
    } catch (e) {
      return thunkAPI.rejectWithValue('loginError')
    }
  }
)