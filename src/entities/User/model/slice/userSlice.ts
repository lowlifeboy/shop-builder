import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type User, type UserSchema } from 'entities/User'
import { USER_LOCALSTORAGE_KEY } from 'shared/const/localstorage'

const initialState: UserSchema = {}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload
    },
    initAuthData: (state) => {
      const user = localStorage.getItem(USER_LOCALSTORAGE_KEY)

      if (user) {
        state.authData = JSON.parse(user)
      }
    },
    logout: (state) => {
      localStorage.removeItem(USER_LOCALSTORAGE_KEY)
      state.authData = undefined
    }
  }
})

// Action creators are generated for each case reducer function
export const { actions: userActions, reducer: userReducer } = userSlice
