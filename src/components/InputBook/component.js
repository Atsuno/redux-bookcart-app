import React from 'react'
import './assets/style.css'

const InputBook = () => (
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
            Proce(In Rupee):
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

export default InputBook