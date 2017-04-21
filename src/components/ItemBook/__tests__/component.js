import React from 'react'
import { shallow } from 'enzyme'
import ItemBook from '../component'

describe('ItemBook', () => {
  const defaultProps = {
    id: 1,
    isbn: '1',
    name: 'text 1',
    price: '100',
    quantity: '2',
    editData: false,
    bookDelete: () => true,
    bookEdit: () => true,
    bookSave: () => true
  }

  const setup = props => {
    const component = shallow(<ItemBook {...defaultProps} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()

    expect(component.find('td')).toHaveLength(6)
    expect(component.find(`td[children="${defaultProps.isbn}"]`)).toHaveLength(1)
    expect(component.find(`td[children="${defaultProps.name}"]`)).toHaveLength(1)
    expect(component.find(`td[children="${`฿${defaultProps.price}`}"]`)).toHaveLength(1)
    expect(component.find(`td[children="${defaultProps.quantity}"]`)).toHaveLength(1)
    expect(component.find(`td[children="${`฿ ${+defaultProps.price * +defaultProps.quantity}`}"]`)).toHaveLength(1)
    expect(component.find('button[children="Edit"]')).toHaveLength(1)
    expect(component.find('button[children="Delete"]')).toHaveLength(1)
  })

  it('editData', () => {
    const component = setup({ editData: true })

    expect(component.find('td')).toHaveLength(6)
    expect(component.find(`td[children="${defaultProps.isbn}"]`)).toHaveLength(1)
    expect(component.find(`td input[value="${defaultProps.name}"]`)).toHaveLength(1)
    expect(component.find(`td input[value="${defaultProps.price}"]`)).toHaveLength(1)
    expect(component.find(`td input[value="${defaultProps.quantity}"]`)).toHaveLength(1)
    expect(component.find(`td [children="${`฿ ${+defaultProps.price * +defaultProps.quantity}`}"]`)).toHaveLength(1)
    expect(component.find('button[children="Save"]')).toHaveLength(1)
    expect(component.find('button[children="Delete"]')).toHaveLength(1)
  })

  it('props change', () => {
    const newProps = {
      isbn: '12345678',
      name: 'text 1',
      price: '100',
      quantity: '2'
    }
    const component = setup(newProps)

    expect(component.find('td')).toHaveLength(6)
    expect(component.find(`td[children="${newProps.isbn}"]`)).toHaveLength(1)
    expect(component.find(`td[children="${newProps.name}"]`)).toHaveLength(1)
    expect(component.find(`td[children="${`฿${newProps.price}`}"]`)).toHaveLength(1)
    expect(component.find(`td[children="${newProps.quantity}"]`)).toHaveLength(1)
    expect(component.find(`td[children="${`฿ ${+newProps.price * +newProps.quantity}`}"]`)).toHaveLength(1)
    expect(component.find('button[children="Edit"]')).toHaveLength(1)
    expect(component.find('button[children="Delete"]')).toHaveLength(1)
  })
  it('name', () => {
    const component = setup({ editData: true })
    expect(component.state('name')).toBe(defaultProps.name)

    component.find(`td input[value="${defaultProps.name}"]`).simulate('change', { target: { value: 'text 1' } })
    expect(component.state('name')).toBe(defaultProps.name)

    component.find(`td input[value="${defaultProps.name}"]`).simulate('change', { target: { value: '5000' } })
    expect(component.state('name')).toBe('5000')
  })

  it('price', () => {
    const component = setup({ editData: true })
    expect(component.state('price')).toBe(defaultProps.price)

    component.find(`td input[value="${defaultProps.price}"]`).simulate('change', { target: { value: 'text 1' } })
    expect(component.state('price')).toBe(defaultProps.price)

    component.find(`td input[value="${defaultProps.price}"]`).simulate('change', { target: { value: '5000' } })
    expect(component.state('price')).toBe('5000')
  })

  it('quantity', () => {
    const component = setup({ editData: true })
    expect(component.state('quantity')).toBe(defaultProps.quantity)

    component.find(`td input[value="${defaultProps.quantity}"]`).simulate('change', { target: { value: 'text 1' } })
    expect(component.state('quantity')).toBe(defaultProps.quantity)

    component.find(`td input[value="${defaultProps.quantity}"]`).simulate('change', { target: { value: '5000' } })
    expect(component.state('quantity')).toBe('5000')
  })

  it('save', () => {
    const bookSave = jest.fn()
    const component = setup({ editData: true, bookSave })

    component.find('button[children="Save"]').simulate('click')
    expect(bookSave).toHaveBeenCalledTimes(1)

    bookSave.mockReset()
    component.setState({ name: '' })
    component.find('button[children="Save"]').simulate('click')
    expect(bookSave).toHaveBeenCalledTimes(1)
  })

  it('delete true', () => {
    const bookDelete = jest.fn()
    const component = setup({ editData: true, bookDelete })

    component.find('button[children="Delete"]').simulate('click')
    expect(bookDelete).toHaveBeenCalledTimes(1)

    bookDelete.mockReset()
    component.setState({ id: defaultProps.id })
    component.find('button[children="Delete"]').simulate('click')
    expect(bookDelete).toHaveBeenCalledTimes(1)
  })

  it('delete false', () => {
    const bookDelete = jest.fn()
    const component = setup({ editData: false, bookDelete })

    component.find('button[children="Delete"]').simulate('click')
    expect(bookDelete).toHaveBeenCalledTimes(1)

    bookDelete.mockReset()
    component.setState({ id: defaultProps.id })
    component.find('button[children="Delete"]').simulate('click')
    expect(bookDelete).toHaveBeenCalledTimes(1)
  })

  it('bookEdit', () => {
    const bookEdit = jest.fn()
    const component = setup({ editData: false, bookEdit })

    component.find('button[children="Edit"]').simulate('click')
    expect(bookEdit).toHaveBeenCalledTimes(1)

    bookEdit.mockReset()
    component.setState({ id: defaultProps.id })
    component.find('button[children="Edit"]').simulate('click')
    expect(bookEdit).toHaveBeenCalledTimes(1)
  })
})
