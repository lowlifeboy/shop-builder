import { createSelector } from '@reduxjs/toolkit'
import { getProfile } from '../getProfile/getProfile'

export const getProfileForm = createSelector(
  getProfile,
  profile => profile?.form ?? {}
)
