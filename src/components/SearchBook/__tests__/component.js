import React from 'react'
import { shallow } from 'enzyme'
import SearchBook from '../component'

jest.mock('../../ListBook', () => jest.fn())
jest.mock('../../../actions/searchBook', () => 'actions')

describe('SearchBook', () => {
  const defaultProps = {
    bookSearch: () => true
  }

  const setup = props => {
    const component = shallow(<SearchBook {...defaultProps} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()
    expect(component.find('p')).toHaveLength(1)

    expect(component.find('input')).toHaveLength(1)
    expect(component.find('input[id="bookSearch"]')).toHaveLength(1)
  })

  it('Search Name', () => {
    const component = setup()
    component.find('input[id="bookSearch"]').simulate('change', { target: { value: 'p' } })
    expect(component.name()).toBe('p')
  })
})