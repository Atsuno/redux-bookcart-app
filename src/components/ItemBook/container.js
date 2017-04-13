import { connect } from 'react-redux'
import { bookDelete, bookEdit } from '../../actions/books'
import ItemBook from './component'

const mapDispatchToProps = { bookDelete, bookEdit }

export default connect(null, mapDispatchToProps)(ItemBook)