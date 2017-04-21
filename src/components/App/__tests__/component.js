import React from 'react'
import { shallow } from 'enzyme'
import App from '../component'

jest.mock('../../InputBook', () => jest.fn())
jest.mock('../../SearchBook', () => jest.fn())
jest.mock('../../ListBook', () => jest.fn())

describe('App', () => {
  const setup = props => {
    const component = shallow(<App />)
    component.setProps(props)
    return component
  }

  it('default', () => {
    const component = setup()

    expect(component.find('div')).toHaveLength(3)
    expect(component.find('img')).toHaveLength(1)
    expect(component.find('br')).toHaveLength(2)
    expect(component.find('h2')).toHaveLength(2)
    expect(component.find('h2[children="Welcome to React"]')).toHaveLength(1)
    expect(component.find('h2[children="Add New Book"]')).toHaveLength(1)
  })
})