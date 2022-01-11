import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as ItemActions from "../actions";
import CheckList from "../components/CheckList";

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ItemActions, dispatch),
});

const VisibleCheckList = connect(mapDispatchToProps)(CheckList);

export default VisibleCheckList;
