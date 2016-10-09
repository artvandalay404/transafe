import React, { Component } from 'react';
import Btn from './Btn';
import Map from './Map';
import TextInput from './TextInput';
import * as api from '../api/api';

export default class MapView extends Component {
  constructor () {
    super()
    this.state = {
      startingPoint: '',
      endingPoint: '',
    }
  }

  componentDidMount () {
    api.getCenterCoord()
      .then(center => {
        this.setState({startingPoint: [center.lon, center.lat]});
    });
  }

  buttonOnClick(address) {
    
    
    api.getRoute()
      .then(routeSteps => {
        console.log("start: " + this.state.startingPoint + ", end: " + this.state.endingPoint)
        console.log("here's our steps:", routeSteps)
        return routeSteps
      })
      .catch(err => console.warn('Error in buttonOnClick:', err))
  }

  updateText (destination) {
    this.setState({endingPoint: destination})
  }

  render(props) {
    return (
      <div>
        <Map />
        <div>
          <textarea 
            onChange={e => this.updateText(e.target.value)}
            type='text'
            placeholder='Destination' />
          <Btn onClick={this.buttonOnClick(e.target.value)} text="Get Directions" />
        </div>
      </div>
    );
  }
}
