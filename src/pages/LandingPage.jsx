import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Button from "../components/Button";
import UserProfile from "../components/UserProfile";
import SectionTitle from "../components/SectionTitle";
import VisibleCheckList from "../containers/VisibleCheckList";
import CheckList from "../components/CheckList";
import "bootstrap/dist/css/bootstrap.css"; // TODO: replace with theme
import "../style.css";
import "../theme/style.css"; // eslint-disable-line import/no-relative-packages
import SecretInfo from "../components/SecretInfo";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      count: 0,
    };
    this.setSearchTerms = this.setSearchTerms.bind(this);
    this.updateItemStatus = this.updateItemStatus.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  componentDidMount() {
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=bioinformatics",
    )
      .then((response) => response.json())
      .then((books) => this.setState({ items: books.items }));
  }

  setSearchTerms(searchTerms) {
    const actions = [this.props];
    actions.setSearchTerms(searchTerms);
    actions.performSearch(searchTerms);
  }

  updateItemStatus(itemId) {
    const actions = [this.props];
    actions.updateItemStatus(itemId);
  }

  incrementCount() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  decrementCount() {
    this.setState((prevState) => ({ count: prevState.count - 1 }));
  }

  render() {
    const { count, items } = this.state;
    const { searchOptions, searchTerms, searchResults } = this.props;
    return (
      <section className="main w-100 pa4 black-80 helvetica">
        <SectionTitle title="Authentication" />
        <div className="lh-copy mt3">
          <Link className="f6 link dim black db" to="/login">
            Log In
          </Link>
          <Link className="f6 link dim black db" to="/signup">
            Sign Up
          </Link>
          <SecretInfo />
        </div>
        <SectionTitle title="User Profile" />
        <UserProfile username="jamidwyer" />
        <SectionTitle title="Checklist" />
        <VisibleCheckList
          items={items}
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
            options={searchOptions}
            placeholder="Choose your schema..."
            selected={searchTerms}
          />
        </Form.Group>
        {searchResults ? <CheckList items={searchResults} /> : null}
        <SectionTitle title="Button" />
        <div className="measure">
          <div className="flex mb2">{count}</div>
          <Button
            clickHandler={this.incrementCount}
            name="Increment"
          />
          <Button
            clickHandler={this.decrementCount}
            name="Decrement"
          />
        </div>
      </section>
    );
  }
}

LandingPage.propTypes = {
  searchOptions: PropTypes.shape,
  searchResults: PropTypes.shape,
  searchTerms: PropTypes.shape,
};

LandingPage.defaultProps = {
  searchOptions: null,
  searchResults: {},
  searchTerms: null,
};

export default LandingPage;
