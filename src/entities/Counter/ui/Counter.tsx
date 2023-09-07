import AppButton, { AppButtonFillTheme, AppButtonTheme } from 'shared/ui/AppButton/AppButton'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/getCounterValue/getCounterValue'
import { useTranslation } from 'react-i18next'

export default function Counter () {
  const { t } = useTranslation()
  const dispatch = useDispatch()
  const counterValue = useSelector(getCounterValue)
  const increment = () => {
    dispatch(counterActions.increment())
  }

  const decrement = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h2 data-testid="counter-value">{counterValue}</h2>
      <AppButton data-testid="increment-btn" onClick={increment} theme={AppButtonTheme.ROUNDED} >{t('increment')}</AppButton>
      <AppButton data-testid="decrement-btn" onClick={decrement} theme={AppButtonTheme.ROUNDED} fillTheme={AppButtonFillTheme.OUTLINE} >{t('decrement')}</AppButton>
    </div>
  )
}
