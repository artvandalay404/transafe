import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <Button
        disabled={this.state.isLoading}
        bsStyle="success"
        onClick={this.state.isLoading ? null : this.props.onClick}
        >
        {this.props.text}
      </Button>
    );
  }

}

Btn.propTypes = {
  text: React.PropTypes.string,
  onClick: React.PropTypes.func,
};
