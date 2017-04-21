import { mapDispatchToProps } from '../container'
import { bookAdd } from '../../../actions/books'

jest.mock('../component', () => jest.fn())
jest.mock('../../../actions/books', () => 'actions')

describe('Input Container', () => {
  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expect(mapDispatchToProps.bookAdd).toBe(bookAdd)
  })
})