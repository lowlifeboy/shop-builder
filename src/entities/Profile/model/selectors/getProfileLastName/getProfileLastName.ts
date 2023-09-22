import { createSelector } from '@reduxjs/toolkit'
import { getProfileForm } from '../getProfileForm/getProfileForm'

export const getProfileLastName = createSelector(
  getProfileForm,
  form => form?.lastName ?? ''
)
