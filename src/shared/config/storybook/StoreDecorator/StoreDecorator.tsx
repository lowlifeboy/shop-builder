import { type StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { loginReducer } from 'features/AuthByUsername'
import { profileReducer } from 'entities/Profile'
import { type ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader'

const defaultAsyncReducers: ReducersList = {
  loginForm: loginReducer,
  profile: profileReducer
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
