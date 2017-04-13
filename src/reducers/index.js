import { combineReducers } from 'redux'
import books from './books'

export const reducers = {
  books
}

export const rootReducers = combineReducers(reducers)
