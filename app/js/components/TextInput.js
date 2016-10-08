import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class TextField extends Component {
  constructor() {
    super();
    this.state = {
      value: '',
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    return (
      <FormControl
        bsSize="large"
        value={this.state.value}
        onChange={this.handleChange}
        placeholder={this.props.placeholder}
      />
    );
  }
}

TextField.propTypes = {
  placeholder: React.PropTypes.string,
};
