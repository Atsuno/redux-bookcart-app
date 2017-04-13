import React, { Component } from 'react'
import './assets/style.css'

class InputBook extends Component {
  state = {
    name: '',
    price: '',
    quantity: ''
  }

  render() {
    return (

      <div>
        <div>
          <table>
            <tbody>
              <tr>
                <th className="th-input">
                ISBN:
              </th>
                <td className="td-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <th className="th-input">
                Name:
              </th>
                <td className="td-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <th className="th-input">
                Price(In Rupee):
              </th>
                <td className="td-input">
                  <input type="text" />
                </td>
              </tr>
              <tr>
                <th className="th-input">
                Quantity:
              </th>
                <td className="th-input">
                  <input type="text" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="btn-input">
          <button >Add to list</button>
        </div>
      </div>
    )
  }
}
export default InputBook