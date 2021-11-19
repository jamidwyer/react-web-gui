import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Footer from "./Footer";
import VisibleItemList from "../containers/VisibleItemList";
import ItemList from "../components/ItemList";
import "bootstrap/dist/css/bootstrap.css";

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.setSearchTerms = this.setSearchTerms.bind(this);
    this.updateItemStatus = this.updateItemStatus.bind(this);
  }

  setSearchTerms(searchTerms) {
    console.log(searchTerms);
    this.props.actions.setSearchTerms(searchTerms);
    this.props.actions.performSearch(searchTerms);
  }

  updateItemStatus(itemId) {
    this.props.actions.updateItemStatus(itemId);
  }

  componentDidMount() {
    fetch("https://www.googleapis.com/books/v1/volumes?q=bioinformatics")
      .then((response) => response.json())
      .then((books) => this.setState({ items: books.items }));
  }

  render() {
    //var searchOptions = ["Product", "User", "Inventory"];
    console.log(this.props.searchOptions);
    return (
      <Fragment>
        <section className="main">
          <VisibleItemList
            items={this.props.items}
            updateItemStatus={this.updateItemStatusRedux}
          />
        </section>
        <Form.Group style={{ marginTop: "20px" }}>
          <Form.Label>Choose Schema</Form.Label>
          <Typeahead
            id="basic-typeahead-multiple"
            labelKey="name"
            multiple
            onChange={this.setSearchTerms}
            options={this.props.searchOptions}
            placeholder="Choose your schema..."
            selected={this.props.searchTerms}
          />
        </Form.Group>
        {this.props.searchResults ? (
          <ItemList items={this.props.searchResults} />
        ) : null}

        <Footer />
      </Fragment>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default MainSection;
