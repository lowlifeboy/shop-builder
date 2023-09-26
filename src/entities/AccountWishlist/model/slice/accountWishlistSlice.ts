import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { fetchAccountWishlist } from '../services/fetchAccountWishlist/fetchAccountWishlist'
import { type AccountWishlistState } from '../types/accountWishlist'
import { type Product } from 'entities/Product'

const initialState: AccountWishlistState = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const accountWishlistSlice = createSlice({
  name: 'accountWishlist',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch accountWishlist data
      .addCase(fetchAccountWishlist.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAccountWishlist.fulfilled, (state, action: PayloadAction<Product[]>) => {
        state.isLoading = false
        state.error = undefined
        state.data = action.payload
      })
      .addCase(fetchAccountWishlist.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: accountWishlistActions, reducer: accountWishlistReducer } = accountWishlistSlice
