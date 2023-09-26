import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'

import { type Product } from 'entities/Product'

export const fetchAccountWishlist = createAsyncThunk<Product[], undefined, ThunkConfig<string>>(
  'accountWishlist/fetchAccountWishlist',
  // async ({ id, optionalProp = 'defaultProp' }: { id: string, optionalProp?: string }, { dispatch, extra: { http } }) => {
  async (_, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<Product[]>('/accountWishlist')

      if (!response.data) {
        return rejectWithValue('error')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('loginError')
    }
  })
