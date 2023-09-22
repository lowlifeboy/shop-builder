import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'

export const fetchProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/fetchProfileData',
  // async ({ id, optionalProp = 'defaultProp' }: { id: string, optionalProp?: string }, { dispatch, extra: { http } }) => {
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<Profile>('/profile')

      console.log('response', response)

      if (!response.data) {
        return rejectWithValue('error')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('loginError')
    }
  })
