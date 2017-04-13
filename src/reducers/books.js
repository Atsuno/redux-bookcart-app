import { initialStore } from '../store'
import TYPE from '../actions/types'

const createNewBooks = (books, name, price, quantity) => ({
  isbn: books.length ? books[books.length - 1].id + 1 : 1,
  name,
  price,
  quantity
})

export default (books = initialStore.books, action) => {
  switch (action.type) {
    case TYPE.BOOK.ADD: {
      return [...books, createNewBooks(books, action.payload.name, action.payload.price, action.payload.quantity)]
    }
    case TYPE.BOOK.DELETE: {
      return books.filter(record => record.id !== action.payload.id)
    }
    default: {
      return books
    }
  }
}