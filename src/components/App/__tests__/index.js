import Index from '../'
import Component from '../component'

jest.mock('../component', () => 'component')

describe('App Wrapper', () => {
  it('wrapper', () => {
    expect(Index).toBe(Component)
  })
})
