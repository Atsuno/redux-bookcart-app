import React, { PropTypes } from 'react'
import './assets/style.css'

const ItemBook = ({ id, isbn, name, price, quantity, editData, bookDelete, bookEdit }) => (
  <tr>
    <td className="td-item">
      { isbn }
    </td>
    <td className="td-item">
      <span className={!editData ? 'viewStyle' : 'editStyle'}>{ name }</span>
      <input className={editData ? 'viewStyle' : 'editStyle'} type="text" value={name} onChange={event => event.target.value()} />
    </td>
    <td className="td-item">
      <span className={!editData ? 'viewStyle' : 'editStyle'}>{ `฿${+price}` }</span>
      <input className={editData ? 'viewStyle' : 'editStyle'} type="text" value={price} onChange={event => event.target.value()} />
    </td>
    <td className="td-item">
      <span className={!editData ? 'viewStyle' : 'editStyle'}>{ +quantity }</span>
      <input className={editData ? 'viewStyle' : 'editStyle'} type="text" value={quantity} onChange={event => event.target.value()} />
    </td>
    <td className="td-item">
      { `฿ ${+price * +quantity}` }
    </td>
    <td className="td-item">
      <button className={!editData ? 'viewStyle' : 'editStyle'} onClick={() => bookEdit(id)}>Edit</button>
      <button className={editData ? 'viewStyle' : 'editStyle'} onClick={() => bookEdit(id)}>Save</button>
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
  editData: PropTypes.bool,
  bookDelete: PropTypes.func.isRequired,
  bookEdit: PropTypes.func.isRequired
}
ItemBook.defaultProps = {
  id: 1,
  isbn: '1',
  name: 'text 1',
  price: '100',
  quantity: '2',
  editData: false
}

export default ItemBook