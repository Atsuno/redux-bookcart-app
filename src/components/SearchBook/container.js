import { connect } from 'react-redux'
import { bookSearch } from '../../actions/searchBook'
import SearchBook from './component'

const mapDispatchToProps = { bookSearch }

export default connect(null, mapDispatchToProps)(SearchBook)