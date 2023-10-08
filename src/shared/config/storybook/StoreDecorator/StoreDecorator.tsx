import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'
import { accountOrdersReducer } from 'entities/AccountOrders'
import { accountWishlistReducer } from 'entities/AccountWishlist'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  accountOrders: accountOrdersReducer,
  accountWishlist: accountWishlistReducer
}

export default function StoreDecorator (
  state: DeepPartial<StateSchema>,
  asyncReducers?: ReducersList
) {
  return function (Story: any) {
    return (
      <StoreProvider initialState={state} asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}>
        <Story />
      </StoreProvider>
    )
  }
}
