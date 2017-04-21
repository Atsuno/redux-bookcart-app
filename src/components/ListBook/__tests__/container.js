import { mapStateToProps } from '../container'

jest.mock('../../../actions/books', () => 'actions')

describe('ItemBook Container', () => {
  it('mapStateToProps', () => {
    const state = {}
    const keyProps = mapStateToProps(state)
    expect(keyProps).toEqual(state)
  })
})