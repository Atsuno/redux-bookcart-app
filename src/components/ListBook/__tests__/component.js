import React from 'react'
import { shallow } from 'enzyme'
import ListBook from '../component'

jest.mock('../../ItemBook', () => jest.fn())

describe('ListBook', () => {
  const defaultProps = {
    books: [
      {
        id: 1,
        isbn: '12345678',
        name: 'text 1',
        price: '100',
        quantity: '2',
        editData: false
      }
    ],
    searchBook: {
      name: 'text 1'
    }
  }

  const setup = props => {
    const component = shallow(<ListBook {...defaultProps} />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()

    expect(component.find('th')).toHaveLength(6)
    expect(component.find('th[children="ISBN"]')).toHaveLength(1)
    expect(component.find('th[children="Name"]')).toHaveLength(1)
    expect(component.find('th[children="Price"]')).toHaveLength(1)
    expect(component.find('th[children="Quantity"]')).toHaveLength(1)
    expect(component.find('th[children="Total Price"]')).toHaveLength(1)
    expect(component.find('th[children="Action"]')).toHaveLength(1)
  })
})
