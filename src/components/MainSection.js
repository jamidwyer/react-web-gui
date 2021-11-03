import React, { Component } from "react";
import PropTypes from "prop-types";
import Footer from "./Footer";
import VisibleItemList from "../containers/VisibleItemList";
import { ItemProvider } from "../context/ItemContext";
import "bootstrap/dist/css/bootstrap.css";

class MainSection extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCreators: true,
    };
    this.updateItemStatus = this.updateItemStatus.bind(this);
    this.updateItemStatusRedux = this.updateItemStatusRedux.bind(this);
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
    console.log(this.props);
    return (
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
          <Footer
            completedCount={this.props.completedItems}
            activeCount={this.props.items.length - this.props.completedItems}
            onClearCompleted={this.props.actions.clearCompleted}
          />
        </section>
      </ItemProvider>
    );
  }
}

MainSection.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default MainSection;

/*
    "https://www.googleapis.com/books/v1/volumes?q=inauthor:jane%20austen"
  */
