import { connect } from 'react-redux'
import Example from './component'
import { increaseNumber } from '../../actions/example'

export const mapStateToProps = state => ({
  number: state.example.number
})
export const mapDispatchToProps = { increaseNumber }

export default connect(mapStateToProps, mapDispatchToProps)(Example)