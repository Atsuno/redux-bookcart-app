import { connect } from 'react-redux'
import { bookDelete, bookEdit, bookSave } from '../../actions/books'
import ItemBook from './component'

export const mapStateToProps = state => ({ ...state })

export const mapDispatchToProps = { bookDelete, bookEdit, bookSave }

export default connect(mapStateToProps, mapDispatchToProps)(ItemBook)