import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'

export const getProfileError = createSelector(
  getProfile,
  profile => profile?.error
)
