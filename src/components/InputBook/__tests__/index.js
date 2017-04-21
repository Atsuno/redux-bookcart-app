import Index from '../'
import Container from '../container'

jest.mock('../container', () => 'container')

describe('InputBook Wrapper', () => {
  it('wrapper', () => {
    expect(Index).toBe(Container)
  })
})
