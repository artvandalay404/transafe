import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class TextField extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <FormControl
        bsSize="large"
        value={this.props.value}
        placeholder={this.props.placeholder}
      />
    );
  }
}

TextField.propTypes = {
  placeholder: React.PropTypes.string,
};
