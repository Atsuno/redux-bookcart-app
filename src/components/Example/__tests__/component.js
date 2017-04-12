import React from 'react'
import { shallow } from 'enzyme'
import Example from '../component'

describe('Example', () => {
  let component
  const defaultProps = {
    number: 10,
    increaseNumber: jest.fn()
  }

  beforeEach(() => {
    component = shallow(<Example {...defaultProps} />)
  })

  it('default', () => {
    expect(component.text()).toBe('[ - 10 - ] Increase')
    expect(component.find('button')).toHaveLength(1)
  })

  it('handle increaseNumber', () => {
    component.find('button').simulate('click')
    expect(defaultProps.increaseNumber).toHaveBeenCalledTimes(1)
  })
})