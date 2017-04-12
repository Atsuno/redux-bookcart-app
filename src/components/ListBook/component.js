import React from 'react'
import './assets/style.css'

const ListBook = () => (
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
      </tbody>
    </table>
  </div>
)

export default ListBook