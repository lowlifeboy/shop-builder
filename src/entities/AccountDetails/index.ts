export { default as AccountDetailsForm } from './ui/AccountDetailsForm/AccountDetailsForm'

export { getAccountDetailsData } from './model/selectors/getAccountDetailsData/getAccountDetailsData'
export { getAccountAvatar } from './model/selectors/getAccountAvatar/getAccountAvatar'

export { fetchAccountDetails } from './model/services/fetchAccountDetails/fetchAccountDetails'

export { accountDetailsActions, accountDetailsReducer } from './model/slice/accountDetailsSlice'

export type { AccountDetailsSchema, AccountDetailsState } from './model/types/accountDetails'
