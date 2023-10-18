import { createAsyncThunk } from '@reduxjs/toolkit'

import { type ThunkConfig } from 'app/providers/StoreProvider'
import type ArticleSchema from '../../types/articleSchema'

export const fetchArticleById = createAsyncThunk<ArticleSchema, string, ThunkConfig<string>>(
  'articleDetails/fetchArticleDetails',
  // async ({ id, optionalProp = 'defaultProp' }: { id: string, optionalProp?: string }, { dispatch, extra: { http } }) => {
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI

    try {
      const response = await extra.api.get<ArticleSchema>(`/articles/${articleId}`)

      if (!response.data) {
        return rejectWithValue('error')
      }

      return response.data
    } catch (e) {
      return rejectWithValue('serverError')
    }
  })
