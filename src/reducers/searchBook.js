import { initialStore } from '../store'
import TYPE from '../actions/types'

export default (searchBook = initialStore.searchBook, action) => {
  switch (action.type) {
    case TYPE.SEARCH.BOOK: {
      return {
        name: action.payload.name
      }
    }
    default: {
      return searchBook
    }
  }
}