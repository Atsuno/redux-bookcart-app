import TYPE from './types'

export const bookAdd = (isbn, name, price, quantity) => ({
  type: TYPE.BOOK.ADD,
  payload: { isbn, name, price, quantity }
})

export const bookDelete = id => ({
  type: TYPE.BOOK.DELETE,
  payload: { id }
})