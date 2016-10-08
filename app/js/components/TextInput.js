import React, { Component } from 'react';
import { FormControl } from 'react-bootstrap';

export default class TextField extends Component {
  constructor() {
    super();
    this.state = {
      value: ''.
    };
  }

  handleChange(e) {
    this.setState({value: e.target.value});
  }

  render() {
    <FormControl
      bsSize="large"
      value={this.state.value}
      onChange={this.handleChange}
      />
  }
}
