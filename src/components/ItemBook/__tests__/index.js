import Index from '../'
import Container from '../container'

describe('ItemBook Wrapper', () => {
  it('wrapper', () => {
    expect(Index).toBe(Container)
  })
})