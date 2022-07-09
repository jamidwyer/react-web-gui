import React, { Component } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import Button from "../components/Button";
import Profile from "../components/Profile";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Grid from "../components/Grid";
import VisibleCheckList from "../containers/VisibleCheckList";
import CheckList from "../components/CheckList";
import DataTable from "../components/DataTable";
import "bootstrap/dist/css/bootstrap.css"; // TODO: replace with theme
import "../style.css";
import "../theme/style.css"; // eslint-disable-line import/no-relative-packages
import SecretInfo from "../components/SecretInfo";
import { remap } from "../utils";

export class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: {},
      count: 0,
      rows: [],
      cols: [
        { header: "Album", name: "album" },
        { header: "Artist", name: "artist" },
      ],
      topAlbums: [],
    };
    this.setSearchTerms = this.setSearchTerms.bind(this);
    this.updateItemStatus = this.updateItemStatus.bind(this);
    this.incrementCount = this.incrementCount.bind(this);
    this.decrementCount = this.decrementCount.bind(this);
  }

  componentDidMount() {
    // eslint-disable-next-line react/destructuring-assignment
    const { REACT_APP_LASTFM_API_KEY } = this.props.config;
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=bioinformatics",
    )
      .then((response) => response.json())
      .then((books) => this.setState({ items: books.items }));

    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jamidwyer&api_key=${REACT_APP_LASTFM_API_KEY}&format=json`,
    )
      .then((response) => response.json())
      .then((data) => {
        const albums = data.topalbums.album;
        const rows = albums.map((album) => {
          const row = {
            album: album.name,
            artist: album.artist.name,
          };
          return row;
        });
        return this.setState({
          rows,
          topAlbums: albums,
        });
      });
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
    const { count, items, rows, cols, topAlbums } = this.state;
    const { searchOptions, searchTerms, searchResults } = this.props;
    return (
      <div className="main w-100 pa4 black-80 helvetica">
        <header>
          <h1>React Web UI Components</h1>
        </header>
        <section>
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
          <Profile username="jamidwyer" />
          {topAlbums && topAlbums[0] ? (
            <>
              <SectionTitle title="Card" />
              <div className="measure">
                <Card
                  item={remap(topAlbums[0], "lastFmAlbums")}
                  dataSource="lastFmAlbums"
                />
              </div>
            </>
          ) : null}
          {topAlbums && topAlbums[0] ? (
            <>
              <SectionTitle title="Grid" />
              <div>
                <Grid items={topAlbums} dataSource="lastFmAlbums" />
              </div>
            </>
          ) : null}
          <SectionTitle title="Checklist" />
          <VisibleCheckList
            items={items}
            title="To read"
            dataSource="googleBooks"
            updateItemStatus={this.updateItemStatus}
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
          <SectionTitle title="Data Table" />
          <div className="measure">
            <DataTable cols={cols} rows={rows} />
          </div>
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
      </div>
    );
  }
}

LandingPage.propTypes = {
  config: PropTypes.shape({
    REACT_APP_LASTFM_API_KEY: PropTypes.string,
  }),
  searchOptions: PropTypes.func,
  searchResults: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.func,
  ]),
  searchTerms: PropTypes.func,
};

LandingPage.defaultProps = {
  config: {
    lastFmApiKey: "",
  },
  searchOptions: null,
  searchResults: {},
  searchTerms: null,
};

export default LandingPage;
