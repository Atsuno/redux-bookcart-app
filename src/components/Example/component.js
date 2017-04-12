import React, { PropTypes } from 'react'

const Example = ({ number, increaseNumber }) => (
  <div>
    [ - {number} - ] <button onClick={() => increaseNumber(5)}>Increase</button>
  </div>
)

Example.propTypes = {
  number: PropTypes.number,
  increaseNumber: PropTypes.func.isRequired
}

Example.defaultProps = {
  number: 10
}

export default Example