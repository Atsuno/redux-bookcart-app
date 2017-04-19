import { combineReducers } from 'redux'
import books from './books'
import searchBook from './searchBook'

export const reducers = {
  books,
  searchBook
}

export const rootReducers = combineReducers(reducers)
