import TYPE from './types'

export const bookAdd = (name, price, quantity) => ({
  type: TYPE.BOOK.ADD,
  payload: { name, price, quantity }
})

export const bookDelete = id => ({
  type: TYPE.BOOK.DELETE,
  payload: { id }
})