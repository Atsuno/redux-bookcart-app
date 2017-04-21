import booksReducer from '../searchBook'
import TYPE from '../../actions/types'
import { initialStore } from '../../store'

describe('SearchBook Reducers', () => {
  it(TYPE.SEARCH.BOOK, () => {
    const currentState = initialStore.searchBook
    const expectedState =
      {
        name: '1'
      }
    const receiveState = booksReducer(currentState, {
      type: TYPE.SEARCH.BOOK,
      payload: {
        name: '1'
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it(TYPE.SEARCH.BOOK, () => {
    const currentState = initialStore.searchBook
    const expectedState =
      {
        name: '2'

      }
    const receiveState = booksReducer(currentState, {
      type: TYPE.SEARCH.BOOK,
      payload: {
        name: '2'
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it('initial', () => {
    const receiveState = booksReducer(undefined, {})

    expect(receiveState).toEqual(initialStore.searchBook)
    expect(receiveState).toBe(initialStore.searchBook)
  })
})