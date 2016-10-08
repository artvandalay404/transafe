import React, { Component } from 'react';
import Button from './Button';
import Map from './Map';
import TextInput from './TextInput';

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
        <Button>
          text="Get Directions"
          onClick={this.buttonOnClick}
        </Button>
      </div>
    );
  }
}
