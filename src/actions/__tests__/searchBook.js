import { bookSearch } from '../searchBook'
import TYPE from '../types'

describe('Search Book Reducers', () => {
  it('should Search action book name', () => {
    const user = {
      name: 'text 1'
    }
    const expectedActon = {
      type: TYPE.SEARCH.BOOK,
      payload: {
        name: user.name
      }
    }
    expect(bookSearch(user.name)).toEqual(expectedActon)
  })
})