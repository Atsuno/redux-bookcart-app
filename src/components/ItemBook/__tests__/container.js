import { mapStateToProps, mapDispatchToProps } from '../container'
import { bookDelete, bookEdit, bookSave } from '../../../actions/books'

jest.mock('../component', () => jest.fn())
jest.mock('../../../actions/books', () => 'actions')

describe('ItemBook Container', () => {
  it('mapStateToProps', () => {
    const state = {}
    const expectProps = mapStateToProps(state)
    expect(expectProps).not.toBe(state)
    expect(expectProps).toEqual(state)
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(3)
    expect(mapDispatchToProps.bookDelete).toBe(bookDelete)
    expect(mapDispatchToProps.bookEdit).toBe(bookEdit)
    expect(mapDispatchToProps.bookSave).toBe(bookSave)
  })
})