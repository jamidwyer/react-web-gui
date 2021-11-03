import React, { Component } from "react";
import PropTypes from "prop-types";
import { ItemConsumer } from "../context/ItemContext";

export default class Item extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    editItem: PropTypes.func.isRequired,
    deleteItem: PropTypes.func.isRequired,
    completeItem: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.statusChange = this.statusChange.bind(this);
    this.state = {
      completed: this.props.item.completed,
    };
  }

  statusChange() {
    const { item, updateItemStatus } = this.props;
    const status =
      !item.status || item.status === "unread" ? "completed" : "unread";
    this.setState({ completed: status });
    updateItemStatus(item.id, status);
  }

  render() {
    const { item, updateItemStatus } = this.props;
    const { volumeInfo } = item;
    const itemCompleted = item.completed;

    const element = (
      <ItemConsumer>
        {({ showCreators }) => (
          <div className="list-group-item view">
            <input
              className="toggle"
              type="checkbox"
              checked={itemCompleted}
              onChange={() => this.statusChange()}
            />
            <label>{volumeInfo.title}</label>
            {showCreators ? (
              <p
                style={{
                  fontSize: "12px",
                  textAlign: "right",
                  marginRight: "10px",
                }}
              >
                Creator: {volumeInfo.authors[0]}
              </p>
            ) : null}
          </div>
        )}
      </ItemConsumer>
    );

    return <li>{element}</li>;
  }
}
