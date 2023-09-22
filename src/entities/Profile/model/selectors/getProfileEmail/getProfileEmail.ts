import { createSelector } from '@reduxjs/toolkit'
import { getProfileForm } from '../getProfileForm/getProfileForm'

export const getProfileEmail = createSelector(
  getProfileForm,
  form => form?.email ?? ''
)
