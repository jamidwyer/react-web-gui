import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as ItemActions from '../actions'
import ItemList from '../components/ItemList'
import { getVisibleItemList } from '../selectors'

const mapStateToProps = state => ({
  filteredItems: getVisibleItemList(state)
})

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(ItemActions, dispatch)
})


const VisibleItemList = connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemList)

export default VisibleItemList
