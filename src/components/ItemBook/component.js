import React, { PropTypes } from 'react'
import './assets/style.css'

const ItemBook = ({ id, isbn, name, price, quantity, bookDelete, bookEdit }) => (
  <tr>
    <td className="td-item">
      { isbn }
    </td>
    <td className="td-item">
      { name }
    </td>
    <td className="td-item">
      { `฿${+price}` }
    </td>
    <td className="td-item">
      { +quantity }
    </td>
    <td className="td-item">
      { `฿ ${+price * +quantity}` }
    </td>
    <td className="td-item">
      <button onClick={() => bookEdit(id)}>Edit</button>
      <button onClick={() => bookDelete(id)}>Delete</button>
    </td>
  </tr>
)

ItemBook.propTypes = {
  id: PropTypes.number,
  isbn: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  bookDelete: PropTypes.func.isRequired
}
ItemBook.defaultProps = {
  id: 1,
  isbn: '1',
  name: 'text 1',
  price: '100',
  quantity: '2'
}

export default ItemBook