import React, { Component } from "react";
import PropTypes from "prop-types";
import InputGroup from 'react-bootstrap/InputGroup';

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

    const element = (
      <div className="list-group-item view">
        <InputGroup className="mb-3">
          <InputGroup.Checkbox aria-label={name} 
            checked={itemCompleted}
            onChange={() => this.statusChange()}
          />
          <InputGroup.Text>{name}</InputGroup.Text>
            {description ? <InputGroup.Text>{description}</InputGroup.Text> : null }
        </InputGroup>
      </div>
    );

    return <li>{element}</li>;
  }
}
