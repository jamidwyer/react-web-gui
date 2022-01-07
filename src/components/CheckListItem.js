import React, { Component } from "react";
import PropTypes from "prop-types";

export default class CheckListItem extends Component {
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
      !item.status || item.status === "unread"
        ? "completed"
        : "unread";
    this.setState({ completed: status });
    updateItemStatus(item.id, status);
  }

  render() {
    const { item, updateItemStatus } = this.props;
    const { name, creators, description } = item;
    const itemCompleted = item.completed;

    const element = (
      <>
        <div class="flex items-center mb2">
          <input
            class="mr2"
            type="checkbox"
            id={name}
            value={name}
            aria-label={name}
            checked={itemCompleted}
            onChange={() => this.statusChange()}
          />
          <label for={name} class="lh-copy">
            {name}
          </label>
        </div>
        <div class="flex mb2">
          {description ? <text>{description}</text> : null}
        </div>
      </>
    );

    return element;
  }
}
