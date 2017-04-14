import { connect } from 'react-redux'
import ListBook from './component'

const mapStateToProps = state => ({
  books: state.books
})


export default connect(mapStateToProps)(ListBook)