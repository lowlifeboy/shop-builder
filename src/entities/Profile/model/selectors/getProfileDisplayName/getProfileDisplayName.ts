import { createSelector } from '@reduxjs/toolkit'
import { getProfileForm } from '../getProfileForm/getProfileForm'

export const getProfileDisplayName = createSelector(
  getProfileForm,
  form => form?.displayName ?? ''
)
