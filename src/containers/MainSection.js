import { connect } from "react-redux";
import * as ItemActions from "../actions";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";
import { getCompletedItemCount } from "../selectors";

const mapStateToProps = (state) => {
  console.log(state);
  return {
    completedItems: state.items.completedItems,
    items: state.items.items,
    searchData: state.searchData.data,
    searchOptions: state.searchData.searchOptions,
    searchResults: state.searchData.searchResults,
    searchTerms: state.searchData.searchTerms,
  };
};

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(ItemActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
