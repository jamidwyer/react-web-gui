import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions'
import CheckList from '../components/CheckList'
import { getVisibleCheckList } from '../selectors'

const mapStateToProps = state => ({
  filteredItems: getVisibleCheckList(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ItemActions, dispatch)
})


const VisibleCheckList = connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckList)

export default VisibleCheckList
