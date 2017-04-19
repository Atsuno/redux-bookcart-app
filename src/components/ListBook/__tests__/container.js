import { mapStateToProps } from '../container'

describe('ItemBook Container', () => {
  it('mapStateToProps', () => {
    const keyProps = Object.keys(mapStateToProps())
    expect(keyProps).toEqual(['state'])
  })
})