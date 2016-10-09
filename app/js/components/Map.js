import React, { Component } from 'react';
import MapGL from 'react-map-gl';
import * as api from '../api/api';

const accessToken = 'pk.eyJ1Ijoic25hbmRhbGEiLCJhIjoiY2l1'
+'MHhzc3JvMDVndjJ0cXRueDV5b2R6ayJ9.xV6ZgqsjoyESWEZZtVLkFQ';

export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lon: -83.046,
      lat: 42.331,
      zoom: 11,
      startDragLngLat: null,
      isDragging: false,
      coordsShown: [],
      crimes: [],
    };
  }

  componentDidMount() {
    api.getAllCrime()
      .then(crimes => {
        this.setState({crimes: crimes});
      }).catch(err => {
        console.log('error in componentDidMount:' + err);
    });

    api.getCenterCoord()
      .then(center => {
        this.setState({lon: center.lon, lat: center.lat});
    });
  }

    render() {
      return (
        <MapGL width={800}
          height={600}
          latitude={this.state.lat}
          longitude={this.state.lon}
          mapboxApiAccessToken={accessToken}
          zoom={this.state.zoom} onChangeViewport={(viewport) => {
            const {latitude, longitude, zoom} = viewport;
            this.setState({lon: longitude, lat: latitude, zoom: zoom});
          }}
        />
      );
    }
}
