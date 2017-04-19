import { connect } from 'react-redux'
import ListBook from './component'

export const mapStateToProps = state => ({
  books: state.books,
  searchBook: state.searchBook
})

export default connect(mapStateToProps)(ListBook)