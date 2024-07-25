import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  faBowlRice,
  faList,
  faUtensils,
} from "@fortawesome/free-solid-svg-icons";

import Button from "../components/Button.jsx";
import NavLinks from "../components/NavLinks";
import PageHeader from "../components/PageHeader";
import Pagination from "../components/Pagination.jsx";
import Profile from "../components/Profile";
import SectionTitle from "../components/SectionTitle";
import Card from "../components/Card";
import Grid from "../components/Grid";
import DataTable from "../components/DataTable";
import { remap } from "../utils";
import AddItem from "../components/AddItem";
import AddItemForm from "../components/AddItemForm.jsx";
import LoginForm from "../components/LoginForm";
import Search from "../components/Search.jsx";
import InventoryTable from "../components/InventoryTable";

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
    const TEMP_LASTFM_API_KEY = "fa55cd845d16c619538c345274b2a9a2";
    fetch(
      "https://www.googleapis.com/books/v1/volumes?q=bioinformatics",
    )
      .then((response) => response.json())
      .then((books) => this.setState({ items: books.items }));

    fetch(
      `https://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=jamidwyer&api_key=${TEMP_LASTFM_API_KEY}&format=json`,
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
    const navLinks = [
      { name: "Inventory", href: "/", icon: faList },
      {
        name: "Recipes",
        href: "/recipes",
        icon: faUtensils,
      },
    ];
    return (
      <div className="main w-100 p-4 black-80 helvetica">
        <header>
          <h1>React Web UI Components</h1>
        </header>
        <section>
          <SectionTitle title="PageHeader" />
          <PageHeader logoIcon={faBowlRice} />
          <SectionTitle title="Authentication" />
          <LoginForm />
          <SectionTitle title="NavLinks" />
          <NavLinks links={navLinks} currentPath="/" />
          <SectionTitle title="Search" />
          <Search />
          <SectionTitle title="Add Item" />
          <AddItem />
          <SectionTitle title="Add Item Form" />
          <AddItemForm items={[]} quantitativeUnits={[]} />
          <SectionTitle title="User Profile" />
          <Profile username="jamidwyer" />
          {topAlbums && topAlbums[0] ? (
            <>
              <SectionTitle title="Card" />
              <div className="max-w-md">
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
          <SectionTitle title="DataTable" />
          <div className="max-w-md">
            <DataTable cols={cols} rows={rows} />
          </div>
          <SectionTitle title="InventoryTable" />
          <div className="max-w-md">
            <InventoryTable
              inventoryItems={[
                {
                  id: 1,
                  amount: 1,
                  quantitativeUnits: "Each",
                  product: { id: 1, name: "Garlic" },
                  expirationDate: "2024-08-25",
                },
              ]}
            />
          </div>
          <SectionTitle title="Button" />
          <div>
            <div className="flex mb-2">{count}</div>
            <div className="max-w-md flex flex-row space-x-4">
              <Button clickHandler={this.incrementCount}>
                Increment
              </Button>
              <Button clickHandler={this.decrementCount}>
                Decrement
              </Button>
            </div>
          </div>
          <SectionTitle title="Pagination" />
          <Pagination totalPages={5} currentPage={2} />
        </section>
      </div>
    );
  }
}

LandingPage.propTypes = {
  config: PropTypes.shape({
    REACT_APP_LASTFM_API_KEY: PropTypes.string,
  }),
};

LandingPage.defaultProps = {
  config: {
    lastFmApiKey: "",
  },
};

export default LandingPage;
