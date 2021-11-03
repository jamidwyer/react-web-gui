import { connect } from "react-redux";
import * as ItemActions from "../actions";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";
import { getCompletedItemCount } from "../selectors";

const mapStateToProps = (state) => ({
  items: state.items[0].items,
  completedItems: state.items.completedItems,
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ItemActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
