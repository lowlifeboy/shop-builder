export { getAccountAddressesData } from './model/selectors/getAccountAddressesData/getAccountAddressesData'
export type { AccountAddressSchema, AccountAddressesState } from './model/types/accountAddresses'
export { accountAddressesActions, accountAddressesReducer } from './model/slice/accountAddressesSlice'

export { default as AccountAddress } from './ui/AccountAddress/AccountAddress'
