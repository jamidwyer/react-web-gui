import { connect } from 'react-redux'
import Header from '../components/Header'
import { addItem } from '../actions'

export default connect(null, { addItem })(Header)
