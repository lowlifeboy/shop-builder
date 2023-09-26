import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AccountOrderSchema, type AccountOrdersState } from '../types/accountOrders'
import { fetchAccountOrders } from '../services/fetchAccountOrders/fetchAccountOrders'

const initialState: AccountOrdersState = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const accountOrdersSlice = createSlice({
  name: 'accountOrders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch accountOrders data
      .addCase(fetchAccountOrders.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAccountOrders.fulfilled, (state, action: PayloadAction<AccountOrderSchema[]>) => {
        state.isLoading = false
        state.error = undefined
        state.data = action.payload
      })
      .addCase(fetchAccountOrders.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: accountOrdersActions, reducer: accountOrdersReducer } = accountOrdersSlice
