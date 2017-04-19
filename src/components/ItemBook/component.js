import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class ItemBook extends Component {

  state = {
    id: this.props.id,
    name: this.props.name,
    price: this.props.price,
    quantity: this.props.quantity,
    editData: false
  }

  changeName = event => {
    this.setState({
      name: event.target.value
    })
  }

  changePrice = event => {
    if (Number(event.target.value) > -1) {
      this.setState({
        price: event.target.value
      })
    }
  }

  changeQuantity = event => {
    if (Number(event.target.value) > -1) {
      this.setState({
        quantity: event.target.value
      })
    }
  }

  eventSave = () => {
    const id = this.state.id
    const name = this.state.name
    const price = this.state.price
    const quantity = this.state.quantity
    const editData = this.state.editData
    this.props.bookSave(id, name, price, quantity, editData)
  }

  render() {
    if (this.props.editData) {
      return (
        <tr>
          <td className="td-item">
            { this.props.isbn }
          </td>
          <td className="td-item">
            <input type="text" value={this.state.name} onChange={this.changeName} />
          </td>
          <td className="td-item">
            <input type="text" value={+this.state.price} onChange={this.changePrice} />
          </td>
          <td className="td-item">
            <input type="text" value={+this.state.quantity} onChange={this.changeQuantity} />
          </td>
          <td className="td-item">
            { `฿ ${+this.state.price * +this.state.quantity}` }
          </td>
          <td className="td-item">
            <button onClick={this.eventSave}>Save</button>
            <button onClick={() => this.props.bookDelete(this.props.id)}>Delete</button>
          </td>
        </tr>
      )
    }
    return (
      <tr>
        <td className="td-item">
          { this.props.isbn }
        </td>
        <td className="td-item">
          <span>{ this.state.name }</span>
        </td>
        <td className="td-item">
          <span >{ `฿${+this.state.price}` }</span>
        </td>
        <td className="td-item">
          <span >{ +this.state.quantity }</span>
        </td>
        <td className="td-item">
          { `฿ ${+this.state.price * +this.state.quantity}` }
        </td>
        <td className="td-item">
          <button onClick={() => this.props.bookEdit(this.props.id)}>Edit</button>
          <button onClick={() => this.props.bookDelete(this.props.id)}>Delete</button>
        </td>
      </tr>
    )
  }
}

ItemBook.propTypes = {
  id: PropTypes.number,
  isbn: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  quantity: PropTypes.string,
  editData: PropTypes.bool,
  bookDelete: PropTypes.func.isRequired,
  bookEdit: PropTypes.func.isRequired,
  bookSave: PropTypes.func.isRequired
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