import React, { Component } from 'react';
import ReactMapboxGl, { Layer, Feature, ScaleControl, ZoomControl } from 'react-mapbox-gl';
import * as api from '../api/api';

const accessToken = 'pk.eyJ1Ijoic25hbmRhbGEiLCJhIjoiY2l1'
+'MHhzc3JvMDVndjJ0cXRueDV5b2R6ayJ9.xV6ZgqsjoyESWEZZtVLkFQ';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [0,0],
      coordsShown: [],
    };
  }

  componentDidMount() {
    api.getAllCrime2()
      .then(crimes => {
        console.log(crimes);
      })
      .catch(err => console.log("error in componentDidMount:", err))
    }

  render() {
    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/light-v8"
        accessToken={accessToken}
        center={this.state.center}
        movingMethod="jumpTo"
        containerStyle={{ height: '100vh', width: '100%' }}>

        <Layer
          type="fill"
          paint={{'fill-color': '#6F788A', 'fill-opacity': 0.1}}>
          <Feature coordinates={this.state.coordsShown}/>
        </Layer>

        <ScaleControl />
        <ZoomControl />
      </ReactMapboxGl>
    );
  }
}