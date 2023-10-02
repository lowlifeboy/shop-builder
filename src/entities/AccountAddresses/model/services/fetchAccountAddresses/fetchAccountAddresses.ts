import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'

import { type AccountAddressSchema } from '../../types/accountAddresses'

export const fetchAccountAddresses = createAsyncThunk<AccountAddressSchema[], undefined, ThunkConfig<string>>(
  'accountAddresses/fetchAccountAddresses',
  // async ({ id, optionalProp = 'defaultProp' }: { id: string, optionalProp?: string }, { dispatch, extra: { http } }) => {
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      console.log(thunkAPI.getState().accountDetails)
      const response = await extra.api.get<AccountAddressSchema[]>('/accountAddresses')

      if (!response.data) {
        return rejectWithValue('error')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('loginError')
    }
  })
