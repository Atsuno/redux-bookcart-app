import { connect } from 'react-redux'
import { bookDelete } from '../../actions/books'
import ItemBook from './component'

const mapDispatchToProps = { bookDelete }

export default connect(null, mapDispatchToProps)(ItemBook)