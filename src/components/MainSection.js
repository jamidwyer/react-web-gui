import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Button from "./Button";
import Login from "./Login";
import UserProfile from "./UserProfile";
import SectionTitle from "../components/SectionTitle";
import VisibleCheckList from "../containers/VisibleCheckList";
import CheckList from "../components/CheckList";
import "../style.css";

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: {},
      count: 0,
    };
    this.setSearchTerms = this.setSearchTerms.bind(this);
    this.updateItemStatus = this.updateItemStatus.bind(this);
  }

  setSearchTerms(searchTerms) {
    this.props.actions.setSearchTerms(searchTerms);
    this.props.actions.performSearch(searchTerms);
  }

  updateItemStatus(itemId) {
    this.props.actions.updateItemStatus(itemId);
  }

  incrementCount() {
    const newCount = this.state.count + 1;
    this.setState({ count: newCount });
  }

  decrementCount() {
    const newCount = this.state.count - 1;
    this.setState({ count: newCount });
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=bioinformatics",
    )
      .then((response) => response.json())
      .then((books) => this.setState({ items: books.items }));
  }

  updateCount() {}

  render() {
    console.log(this.props.searchOptions);
    const { count } = this.state;
    return (
      <Fragment>
        <section className="main w-100 pa4 black-80 helvetica">
          <SectionTitle title="Login Form" />
          <Login />
          <SectionTitle title="User Profile" />
          <UserProfile username="jamidwyer" />
          <SectionTitle title="Checklist" />
          <VisibleCheckList
            items={this.props.items}
            title="To read"
            updateItemStatus={this.updateItemStatusRedux}
          />
          <SectionTitle title="Search with autocomplete" />
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
            <CheckList items={this.props.searchResults} />
          ) : null}
          <SectionTitle title="Button" />
          <div className="measure">
            <div class="flex mb2">{count}</div>
            <Button
              clickHandler={this.incrementCount.bind(this)}
              name="Increment"
            />
            <Button
              clickHandler={this.decrementCount.bind(this)}
              name="Decrement"
            />
          </div>
        </section>
      </Fragment>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default MainSection;
