import { createSelector } from '@reduxjs/toolkit'
import { getProfileForm } from '../getProfileForm/getProfileForm'

export const getProfileAvatar = createSelector(
  getProfileForm,
  form => form?.avatar ?? ''
)
