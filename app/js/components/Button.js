import React, { Component } from 'react';
import { Button as BootstrapButton } from 'react-bootstrap';

export default class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
    };
  }

  render() {
    return (
      <BootstrapButton
        disabled={this.state.isLoading}
        bsStyle="primary"
        onClick={this.state.isLoading ? null : this.props.onClick}
        >
        {this.props.text}
      </BootstrapButton>
    );
  }

}

Button.propTypes = {
  text: React.PropTypes.string,
  onClick: React.PropTypes.func,
};
