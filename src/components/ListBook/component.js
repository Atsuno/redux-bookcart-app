import React, { PropTypes } from 'react'
import './assets/style.css'
import ItemBook from '../ItemBook'

const ListBook = ({ books, searchBook }) => (
  <div className="div-list">
    <table>
      <tbody>
        <tr>
          <th className="th-list-isbn">
            ISBN
          </th>
          <th className="th-list-npq">
            Name
          </th>
          <th className="th-list-npq">
            Price
          </th>
          <th className="th-list-npq">
            Quantity
          </th>
          <th className="th-list-totle">
            Total Price
          </th>
          <th className="th-list-action">
            Action
          </th>
        </tr>
        {
          books.filter(book => book.name.includes(searchBook.name))
            .map(book => <ItemBook key={book.id} {...book} />)
        }
      </tbody>
    </table>
    <p className="p-list">
        Grand Total: ฿ { books.reduce((callback, book) => callback + (+book.price * +book.quantity), 0)}
    </p>
  </div>
  )
ListBook.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      isbn: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.string,
      quantity: PropTypes.string,
      editData: PropTypes.bool
    })
  ).isRequired,
  searchBook: PropTypes.shape({
    name: PropTypes.string
  })
}

ListBook.defaultProps = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: 1,
      isbn: '123',
      name: 'text 1',
      price: '100',
      quantity: '2',
      editData: false
    })
  ).isRequired,
  searchBook: PropTypes.shape({
    name: 'text 1'
  })
}

export default ListBook