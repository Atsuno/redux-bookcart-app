import { mapStateToProps, mapDispatchToProps } from '../container'
import { bookDelete, bookEdit, bookSave } from '../../../actions/books'

describe('ItemBook Container', () => {
  it('mapStateToProps', () => {
    const keyProps = Object.keys(mapStateToProps())
    expect(keyProps).toEqual(['state'])
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expact(mapDispatchToProps.bookDelete).toBe(bookDelete)
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expact(mapDispatchToProps.bookEdit).toBe(bookEdit)
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expact(mapDispatchToProps.bookSave).toBe(bookSave)
  })
})