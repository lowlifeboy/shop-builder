export { default as AccountDetailsForm } from './ui/AccountDetailsForm/AccountDetailsForm'

export { getAccountDetailsData } from './model/selectors/getAccountDetailsData/getAccountDetailsData'
export { getAccountAvatar } from './model/selectors/getAccountAvatar/getAccountAvatar'
export { getAccountFirstname } from './model/selectors/getAccountFirstname/getAccountFirstname'
export { getAccountLastname } from './model/selectors/getAccountLastname/getAccountLastname'
export { getAccountDisplayName } from './model/selectors/getAccountDisplayName/getAccountDisplayName'
export { getAccountEmail } from './model/selectors/getAccountEmail/getAccountEmail'

export { fetchAccountDetails } from './model/services/fetchAccountDetails/fetchAccountDetails'

export { accountDetailsActions, accountDetailsReducer } from './model/slice/accountDetailsSlice'

export type { AccountDetailsSchema, AccountDetailsState } from './model/types/accountDetails'
