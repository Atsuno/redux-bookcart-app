import booksReducer from '../books'
import TYPE from '../../actions/types'
import { initialStore } from '../../store'

describe('Books Reducers', () => {
  it(TYPE.BOOK.ADD, () => {
    const currentState = initialStore.books
    const expectedState = [
      {
        id: 1,
        isbn: '12345678',
        name: 'text 1',
        price: '100',
        quantity: '2',
        editData: false
      },
      {
        id: 2,
        isbn: '45678912',
        name: 'text 2',
        price: '150',
        quantity: '3',
        editData: false
      },
      {
        id: 3,
        isbn: '12345678',
        name: 'text 1',
        price: '100',
        quantity: '2',
        editData: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.ADD,
      payload: {
        id: 3,
        isbn: '12345678',
        name: 'text 1',
        price: '100',
        quantity: '2',
        editData: false
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it(TYPE.BOOK.DELETE, () => {
    const currentState = initialStore.books
    const expectedState = [
      {
        id: 1,
        isbn: '12345678',
        name: 'text 1',
        price: '100',
        quantity: '2',
        editData: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.DELETE,
      payload: {
        id: 2
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it(TYPE.BOOK.DELETE, () => {
    const currentState = initialStore.books
    const expectedState = [
      {
        id: 2,
        isbn: '45678912',
        name: 'text 2',
        price: '150',
        quantity: '3',
        editData: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.DELETE,
      payload: {
        id: 1
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it(TYPE.BOOK.EDIT, () => {
    const currentState = initialStore.books
    const expectedState = [
      {
        id: 1,
        isbn: '12345678',
        name: 'text 1',
        price: '100',
        quantity: '2',
        editData: true
      },
      {
        id: 2,
        isbn: '45678912',
        name: 'text 2',
        price: '150',
        quantity: '3',
        editData: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.EDIT,
      payload: {
        id: 1
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it(TYPE.BOOK.EDIT, () => {
    const currentState = initialStore.books
    const expectedState = [
      {
        id: 1,
        isbn: '12345678',
        name: 'text 1',
        price: '100',
        quantity: '2',
        editData: false
      },
      {
        id: 2,
        isbn: '45678912',
        name: 'text 2',
        price: '150',
        quantity: '3',
        editData: true
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.EDIT,
      payload: {
        id: 2
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it(TYPE.BOOK.SAVE, () => {
    const currentState = initialStore.books
    const expectedState = [
      {
        id: 1,
        isbn: '12345678',
        name: 'text 1',
        price: '100',
        quantity: '2',
        editData: false
      },
      {
        id: 2,
        isbn: '45678912',
        name: 'abcdefg',
        price: '500',
        quantity: '2',
        editData: false
      }
    ]
    const receiveState = booksReducer(currentState, {
      type: TYPE.BOOK.SAVE,
      payload: {
        id: 2,
        name: 'abcdefg',
        price: '500',
        quantity: '2'
      }
    })
    expect(receiveState).toEqual(expectedState)
    expect(receiveState).not.toBe(expectedState)
    expect(receiveState).not.toBe(currentState)
  })

  it('initial', () => {
    const receiveState = booksReducer(undefined, {})

    expect(receiveState).toEqual(initialStore.books)
    expect(receiveState).toBe(initialStore.books)
  })
})