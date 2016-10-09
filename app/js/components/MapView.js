import React, { Component } from 'react';
import Btn from './Btn';
import Map from './Map';
import TextInput from './TextInput';
import request from 'superagent';

export default class MapView extends Component {

  buttonOnClick() {
    console.log("D TOWN");
  }

  render() {
    return (
      <div>
        <Map />
        <TextInput placeholder="Starting Point" />
        <TextInput placeholder="Destination" />
        <Btn
          onClick={this.buttonOnClick}
          text="Get Directions"
        />
      </div>
    );
  }
}
