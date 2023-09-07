import { counterActions, counterReducer } from './counterSlice'
import { type CounterSchema } from 'entities/Counter'

describe('counterSliceTest', () => {
  it('increment', () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(counterReducer(state, counterActions.increment())).toEqual({ value: 11 })
  })

  it('decrement', () => {
    const state: CounterSchema = {
      value: 10
    }

    expect(counterReducer(state, counterActions.decrement())).toEqual({ value: 9 })
  })

  it('should work with empty state', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
  })
})
