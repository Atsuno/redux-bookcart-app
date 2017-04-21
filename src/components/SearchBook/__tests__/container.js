import { mapDispatchToProps } from '../container'
import { bookSearch } from '../../../actions/searchBook'

jest.mock('../component', () => jest.fn())
jest.mock('../../../actions/searchBook', () => 'actions')

describe('SearchBook Container', () => {
  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expect(mapDispatchToProps.bookDelete).toBe(bookSearch)
  })
})