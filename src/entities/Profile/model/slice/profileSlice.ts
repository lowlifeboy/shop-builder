import { createSlice } from '@reduxjs/toolkit'
import { type ProfileSchema } from 'entities/Profile'

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
  data: undefined,
  error: undefined
}

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {}
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
