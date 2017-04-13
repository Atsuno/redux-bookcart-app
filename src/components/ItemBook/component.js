import React from 'react'
import './assets/style.css'

const ItemBook = ({ isbn, name, price, quantity }) => (
  <tr>
    <td className="td-item">
      { isbn }
    </td>
    <td className="td-item">
      { name }
    </td>
    <td className="td-item">
      { `฿${price}` }
    </td>
    <td className="td-item">
      { quantity }
    </td>
    <td className="td-item">
      { `฿ ${price * quantity}` }
    </td>
    <td className="td-item">
      <button>Edit</button><button>Delete</button>
    </td>
  </tr>
)

export default ItemBook