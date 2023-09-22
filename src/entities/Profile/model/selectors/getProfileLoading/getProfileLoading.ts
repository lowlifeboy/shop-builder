import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'

export const getProfileLoading = createSelector(
  getProfile,
  profile => profile?.isLoading ?? false
)
