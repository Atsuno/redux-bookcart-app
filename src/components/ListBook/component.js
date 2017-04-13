import React from 'react'
import './assets/style.css'
import ItemBook from '../ItemBook'

const ListBook = ({ books }) => (
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
          books.map(book => <ItemBook key={book.id} {...book} />)
        }
      </tbody>
    </table>
    <p className="p-list">
      Grand Total: ฿ { books.reduce((callback, book) => callback + (+book.price * +book.quantity), 0)}
    </p>
  </div>
  )

export default ListBook