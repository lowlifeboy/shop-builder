import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { type ArticleDetailsState } from '../types/articleDetailsState'
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById'
import type ArticleSchema from '../types/articleSchema'

const initialState: ArticleDetailsState = {
  isLoading: false,
  error: undefined,
  data: undefined
}

export const articleDetailsSlice = createSlice({
  name: 'articleDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch accountOrders data
      .addCase(fetchArticleById.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<ArticleSchema>) => {
        state.isLoading = false
        state.error = undefined
        state.data = action.payload
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.isLoading = false
        state.error = action.payload
      })
  }
})

// Action creators are generated for each case reducer function
export const { actions: articleDetailsActions, reducer: articleDetailsReducer } = articleDetailsSlice
