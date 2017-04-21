import React from 'react'
import { shallow } from 'enzyme'
import InputBook from '../component'

describe('InputBook', () => {
  const defaultProps = {
    bookAdd: () => true
  }

  const setup = props => {
    const component = shallow(<InputBook {...defaultProps} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()

    expect(component.find('th')).toHaveLength(4)
    expect(component.find('th[children="ISBN:"]')).toHaveLength(1)
    expect(component.find('th[children="Name:"]')).toHaveLength(1)
    expect(component.find('th[children="Price(In Rupee):"]')).toHaveLength(1)
    expect(component.find('th[children="Quantity:"]')).toHaveLength(1)

    expect(component.find('input')).toHaveLength(4)
    expect(component.find('input[id="isbn"]')).toHaveLength(1)
    expect(component.find('input[id="name"]')).toHaveLength(1)
    expect(component.find('input[id="price"]')).toHaveLength(1)
    expect(component.find('input[id="quantity"]')).toHaveLength(1)
    expect(component.find('button[children="Add to list"]')).toHaveLength(1)
  })

  it('Input ISBN', () => {
    const component = setup()

    component.find('input[id="isbn"]').simulate('change', { target: { value: 'text 1' } })
    expect(component.state('isbn')).toBe('')

    component.find('input[id="isbn"]').simulate('change', { target: { value: '12345678' } })
    expect(component.state('isbn')).toBe('12345678')
  })

  it('Input Name', () => {
    const component = setup()

    component.find('input[id="name"]').simulate('change', { target: { value: 'text 1' } })
    expect(component.state('name')).toBe('text 1')

    component.find('input[id="name"]').simulate('change', { target: { value: '12345678' } })
    expect(component.state('name')).toBe('12345678')
  })

  it('Input Price', () => {
    const component = setup()

    component.find('input[id="price"]').simulate('change', { target: { value: 'text 1' } })
    expect(component.state('price')).toBe('')

    component.find('input[id="price"]').simulate('change', { target: { value: '12345678' } })
    expect(component.state('price')).toBe('12345678')
  })

  it('Input Quantity', () => {
    const component = setup()

    component.find('input[id="quantity"]').simulate('change', { target: { value: 'text 1' } })

    expect(component.state('quantity')).toBe('')

    component.find('input[id="quantity"]').simulate('change', { target: { value: '12345678' } })
    expect(component.state('quantity')).toBe('12345678')
  })

  it('Input Add', () => {
    const bookAdd = jest.fn()
    const component = setup({ bookAdd })

    component.setState({
      isbn: '12345678',
      name: 'text 1',
      price: '100',
      quantity: '2'
    })

    component.find('button[children="Add to list"]').simulate('click')
    expect(bookAdd).toHaveBeenCalledTimes(1)

    bookAdd.mockReset()
    component.find('button[children="Add to list"]').simulate('click')
    expect(bookAdd).toHaveBeenCalledTimes(0)
  })
})