import Index from '../'
import Container from '../container'

jest.mock('../container', () => 'container')

describe('Search Wrapper', () => {
  it('wrapper', () => {
    expect(Index).toBe(Container)
  })
})
