import { createSelector } from '@reduxjs/toolkit'
import { getProfileForm } from '../getProfileForm/getProfileForm'

export const getProfileFirstName = createSelector(
  getProfileForm,
  form => form?.firstName ?? ''
)
