import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type AccountDetailsSchema, type AccountDetailsState } from '../types/accountDetails'
import { fetchAccountDetails } from '../services/fetchAccountDetails/fetchAccountDetails'
import { updateAccountDetails } from '../services/updateAccountDetails/updateAccountDetails'

const initialState: AccountDetailsState = {
  isLoading: false,
  data: undefined,
  error: undefined
}

export const accountDetailsSlice = createSlice({
  name: 'accountDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch accountDetails data
      .addCase(fetchAccountDetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchAccountDetails.fulfilled, (state, action: PayloadAction<AccountDetailsSchema>) => {
        state.isLoading = false
        state.error = undefined
        state.data = action.payload
      })
      .addCase(fetchAccountDetails.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })

      // Update accountDetails data
      .addCase(updateAccountDetails.pending, (state) => {
        state.isLoading = true
      })
      .addCase(updateAccountDetails.fulfilled, (state, action: PayloadAction<AccountDetailsSchema>) => {
        state.isLoading = false
        state.error = undefined
        state.data = action.payload
      })
      .addCase(updateAccountDetails.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

export const { actions: accountDetailsActions, reducer: accountDetailsReducer } = accountDetailsSlice
