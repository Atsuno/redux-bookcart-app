import { mapStateToProps, mapDispatchToProps } from '../container'
import { increaseNumber } from '../../../actions/example'
import { initialStore } from '../../../store'

describe('Example Container', () => {
  it('mapStateToProps', () => {
    const props = mapStateToProps(initialStore)
    const keyProps = Object.keys(props)

    expect(keyProps).toEqual(['number'])
    expect(props.number).toBe(initialStore.example.number)
  })

  it('mapDispatchToProps', () => {
    expect(Object.keys(mapDispatchToProps)).toHaveLength(1)
    expect(mapDispatchToProps.increaseNumber).toBe(increaseNumber)
  })
})