import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

export default class Btn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
    console.log(this.props);
  }

  render() {
    return (
      <Button
        disabled={this.state.isLoading}
        bsStyle="primary"
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
