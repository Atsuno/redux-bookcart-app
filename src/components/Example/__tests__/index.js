import Index from '../'
import Container from '../container'

describe('Example Wrapper', () => {
  it('wrapper', () => {
    expect(Index).toBe(Container)
  })
})