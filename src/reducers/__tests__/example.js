import exampleReducer from '../example'
import TYPE from '../../actions/types'
import { initialStore } from '../../store'

describe('Example Reducer', () => {
  it(TYPE.EXAMPLE.INCREASE, () => {
    const currentState = {
      number: 5
    }
    const receiveState = exampleReducer(currentState, {
      type: TYPE.EXAMPLE.INCREASE,
      payload: {
        number: 15
      }
    })
    const expectedState = {
      number: 20
    }

    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it('initial', () => {
    const receiveState = exampleReducer(undefined, {})

    expect(receiveState).toEqual(initialStore.example)
    expect(receiveState).toBe(initialStore.example)
  })
})