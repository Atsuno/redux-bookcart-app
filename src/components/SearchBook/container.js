import { connect } from 'react-redux'
import { bookSearch } from '../../actions/searchBook'
import SearchBook from './component'

export const mapDispatchToProps = { bookSearch }

export default connect(null, mapDispatchToProps)(SearchBook)