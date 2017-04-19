import TYPE from './types'

export const bookSearch = name => ({
  type: TYPE.SEARCH.BOOK,
  payload: { name }
})