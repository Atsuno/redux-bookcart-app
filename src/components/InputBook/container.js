import { connect } from 'react-redux'
import { bookAdd } from '../../actions/books'
import InputBook from './component'

export const mapDispatchToProps = { bookAdd }

export default connect(null, mapDispatchToProps)(InputBook)