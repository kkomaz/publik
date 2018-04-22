import React, { Component } from 'react';

class Status extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDeleteConfirmation: false
    }

    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.toggleDeleteConfirmation = this.toggleDeleteConfirmation.bind(this);
  }

  onDeleteClick() {
    const { status } = this.props;
    this.props.handleDelete(status.id);
  }

  toggleDeleteConfirmation() {
    this.setState({ showDeleteConfirmation: !this.state.showDeleteConfirmation })
  }

  render() {
    const { status, isLocal } = this.props;

    if(!isLocal()) {
      return (
        <div className="status">
          <div className="status-text">
            {status.text}
          </div>
        </div>
      )
    }

    return (
      <div className="status">
        <div className="status-text">
          {status.text}
        </div>

        <div className="status-button-options">
          <button
            className="btn btn-danger status-delete"
            onClick={this.toggleDeleteConfirmation}
            disabled={this.state.showDeleteConfirmation}
          >
              Delete
          </button>
        </div>
        {
          this.state.showDeleteConfirmation &&
          <div className="status-delete-confirmation">
            <button className="btn btn-danger status-delete-yes" onClick={this.onDeleteClick}>
              YES
            </button>
            <button className="btn btn-info status-delete-no" onClick={this.toggleDeleteConfirmation}>
              NO
            </button>
          </div>
        }
      </div>
    )
  }
}

export default Status;
