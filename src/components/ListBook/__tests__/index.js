import Index from '../'
import Container from '../container'

describe('ListBook Wrapper', () => {
  it('wrapper', () => {
    expect(Index).toBe(Container)
  })
})