import React, { Component } from "react";
import PropTypes from "prop-types";

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
    const { name, creators, description } = item;
    const itemCompleted = item.completed;

    console.log(item);

    const element = (
      <div className="list-group-item view">
        <input
          className="toggle"
          type="checkbox"
          checked={itemCompleted}
          onChange={() => this.statusChange()}
        />
        <label>{name}</label>
        <p>{description}</p>
      </div>
    );

    return <li>{element}</li>;
  }
}
