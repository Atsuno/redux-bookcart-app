import React, { Component, PropTypes } from 'react'
import './assets/style.css'

class ItemBook extends Component {

  state = {
    name: this.props.name,
    price: this.props.price,
    quantity: this.props.quantity,
    editDate: false
  }

  didMount = () => {
    this.setState({
      changeName: this.state.name
    })
  }

  eventEdit = () => {
    this.setState({
      editDate: true,
      changeName: this.props.name
    })
  }

  eventSave = () => {
    const name = this.state.name
    const price = this.state.price
    const quantity = this.state.quantity
    if (name.length && price.length && quantity.length) {
      this.setState({
        editDate: false
      })
    }
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

  render() {
    return (
      <tr>
        <td className="td-item">
          { this.props.isbn }
        </td>
        <td className="td-item">
          <span className={!this.props.editData ? 'viewStyle' : 'editStyle'}>{ this.state.name }</span> <input
            className={this.props.editData ? 'viewStyle' : 'editStyle'}
            type="text" value={this.state.name} onChange={this.changeName}
          />
        </td>
        <td className="td-item">
          <span className={!this.props.editData ? 'viewStyle' : 'editStyle'}>{ `฿${+this.state.price}` }</span> <input
            className={this.props.editData ? 'viewStyle' : 'editStyle'}
            type="text" value={+this.state.price} onChange={this.changePrice} readOnly={false}
          />
        </td>
        <td className="td-item">
          <span className={!this.props.editData ? 'viewStyle' : 'editStyle'}>{ +this.state.quantity }</span> <input
            className={this.props.editData ? 'viewStyle' : 'editStyle'}
            type="text" value={+this.state.quantity} onChange={this.changeQuantity} readOnly={false}
          />
        </td>
        <td className="td-item">
          { `฿ ${+this.state.price * +this.state.quantity}` }
        </td>
        <td className="td-item">
          <button className={!this.props.editData ? 'viewStyle' : 'editStyle'} onClick={() => this.props.bookEdit(this.props.id)}>Edit</button>
          <button className={this.props.editData ? 'viewStyle' : 'editStyle'} onClick={() => this.props.bookEdit(this.props.id)}>Save</button>
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