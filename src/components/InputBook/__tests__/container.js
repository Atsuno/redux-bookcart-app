import { mapDispatchToProps } from '../container'
import { bookAdd } from '../../../actions/books'

describe('Input Container', () => {
  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expact(mapDispatchToProps.bookAdd).toBe(bookAdd)
  })
})