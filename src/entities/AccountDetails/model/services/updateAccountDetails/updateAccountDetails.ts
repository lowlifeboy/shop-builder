import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'

import { type AccountDetailsSchema } from '../../types/accountDetails'

export const updateAccountDetails = createAsyncThunk<AccountDetailsSchema, AccountDetailsSchema, ThunkConfig<string>>(
  'accountDetails/updateAccountDetails',
  async (data, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.put<AccountDetailsSchema>('/accountDetails', data)

      console.log(response.data)

      if (!response.data) {
        return rejectWithValue('error')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('serverError')
    }
  })
