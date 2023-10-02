import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'

import { type AccountDetailsSchema } from '../../types/accountDetails'

export const fetchAccountDetails = createAsyncThunk<AccountDetailsSchema, undefined, ThunkConfig<string>>(
  'accountDetails/fetchAccountDetails',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<AccountDetailsSchema>('/accountDetails')

      if (!response.data) {
        return rejectWithValue('error')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('loginError')
    }
  })
