import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'

export const getProfileData = createSelector(
  getProfile,
  profile => profile?.data ?? {}
)
