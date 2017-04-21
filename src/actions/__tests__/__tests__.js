import { bookAdd, bookDelete, bookEdit, bookSave } from '../books'
import TYPE from '../types'

describe('Books Reducers', () => {
  it('should create action book', () => {
    const user = {
      isbn: '12345678',
      name: 'text 1',
      price: '300',
      quantity: '2'
    }
    const expectedActon = {
      type: TYPE.BOOK.ADD,
      payload: {
        isbn: user.isbn,
        name: user.name,
        price: user.price,
        quantity: user.quantity
      }
    }
    expect(bookAdd(user.isbn, user.name, user.price, user.quantity)).toEqual(expectedActon)
  })

  it('should delete action book', () => {
    const user = {
      id: 1
    }
    const expectedActon = {
      type: TYPE.BOOK.DELETE,
      payload: {
        id: user.id
      }
    }
    expect(bookDelete(user.id)).toEqual(expectedActon)
  })

  it('should edit action book', () => {
    const user = {
      id: 1
    }
    const expectedActon = {
      type: TYPE.BOOK.EDIT,
      payload: {
        id: user.id
      }
    }
    expect(bookEdit(user.id)).toEqual(expectedActon)
  })

  it('should save action book', () => {
    const user = {
      id: 1,
      name: 'google',
      price: '400',
      quantity: '10'
    }
    const expectedActon = {
      type: TYPE.BOOK.SAVE,
      payload: {
        id: user.id,
        name: user.name,
        price: user.price,
        quantity: user.quantity
      }
    }
    expect(bookSave(user.id, user.name, user.price, user.quantity)).toEqual(expectedActon)
  })
})