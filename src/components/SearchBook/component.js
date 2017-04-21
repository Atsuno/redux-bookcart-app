import React, { PropTypes } from 'react'
import './assets/style.css'

const SearchBook = ({ bookSearch }) => (
  <p className="p-search">
    Search Book Name :<input id="bookSearch" type="text" onChange={event => bookSearch(event.target.value)} />
  </p>
)
SearchBook.propTypes = {
  bookSearch: PropTypes.func.isRequired
}

export default SearchBook