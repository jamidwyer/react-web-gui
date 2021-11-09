import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Footer from "./Footer";
import VisibleItemList from "../containers/VisibleItemList";
import { ItemProvider } from "../context/ItemContext";
import "bootstrap/dist/css/bootstrap.css";

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      multiSelections: [],
      showCreators: true,
    };
    this.setMultiSelections = this.setMultiSelections.bind(this);
    this.updateItemStatus = this.updateItemStatus.bind(this);
    this.updateItemStatusRedux = this.updateItemStatusRedux.bind(this);
  }

  setMultiSelections(multiSelections) {
    this.props.actions.setMultiSelections(multiSelections);
  }

  updateItemStatusRedux(itemId) {
    this.props.actions.updateItemStatus(itemId);
  }

  updateItemStatus(itemId, status) {
    let newItems = this.state.items;
    const item = newItems.find((item) => item.id === itemId);
    item.status = status;
    this.setState({
      showCreators: true,
    });
  }

  componentWillMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=bioinformatics")
      .then((response) => response.json())
      .then((books) => this.setState({ items: books.items }));
  }

  render() {
    var options = ["Product", "User", "Inventory"];

    return (
      <Fragment>
        <ItemProvider value={{ showCreators: this.state.showCreators }}>
          <section className="main">
            <button
              className="btn btn-success"
              onClick={() =>
                this.setState({ showCreators: !this.state.showCreators })
              }
            >
              Show Creators
            </button>
            <VisibleItemList
              items={this.props.items}
              updateItemStatus={this.updateItemStatusRedux}
            />
          </section>
        </ItemProvider>
        <Form.Group style={{ marginTop: "20px" }}>
          <Form.Label>Choose Schema</Form.Label>
          <Typeahead
            id="basic-typeahead-multiple"
            labelKey="name"
            multiple
            onChange={() => this.setMultiSelections}
            options={options}
            placeholder="Choose schema..."
            selected={this.state.multiSelections}
          />
        </Form.Group>
      </Fragment>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default MainSection;
