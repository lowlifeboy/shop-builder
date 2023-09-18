import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'
import { type Profile } from '../../types/profile'
import getProfileForm from '../../selectors/getProfileForm/getProfileForm'

export const updateProfileData = createAsyncThunk<Profile, undefined, ThunkConfig<string>>(
  'profile/updateProfileData',
  // async ({ id, optionalProp = 'defaultProp' }: { id: string, optionalProp?: string }, { dispatch, extra: { http } }) => {
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI

    const formData = getProfileForm(getState())

    try {
      const response = await extra.api.put<Profile>('/profile', formData)
      return response.data
    } catch (e) {
      return rejectWithValue('loginError')
    }
  })
