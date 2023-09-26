import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'

import { type AccountOrderSchema } from '../../types/accountOrders'

export const fetchAccountOrders = createAsyncThunk<AccountOrderSchema[], undefined, ThunkConfig<string>>(
  'accountOrders/fetchAccountOrders',
  // async ({ id, optionalProp = 'defaultProp' }: { id: string, optionalProp?: string }, { dispatch, extra: { http } }) => {
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<AccountOrderSchema[]>('/profile/accountOrders')

      if (!response.data) {
        return rejectWithValue('error')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('loginError')
    }
  })
