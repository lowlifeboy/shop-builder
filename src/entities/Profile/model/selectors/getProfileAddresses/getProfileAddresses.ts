import { createSelector } from '@reduxjs/toolkit'
import { getProfileForm } from '../getProfileForm/getProfileForm'

export const getProfileAddresses = createSelector(
  getProfileForm,
  form => form?.addresses ?? []
)
