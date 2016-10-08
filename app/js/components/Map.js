import React, { Component } from 'react';
import ReactMapboxGl from 'react-mapbox-gl';
import request from 'superagent';

const accessToken = 'pk.eyJ1Ijoic25hbmRhbGEiLCJhIjoiY2l1'
+'MHhzc3JvMDVndjJ0cXRueDV5b2R6ayJ9.xV6ZgqsjoyESWEZZtVLkFQ';



export default class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      center: [0,0],
    };
  }

  componentDidMount() {
    request
      .get('http://ip-api.com/json')
      .set('Accept', 'application/json')
      .end((err, res) => {
        this.setState({center: [res.body.lon, res.body.lat]});
        console.log('lat: ' + res.body.lat + 'lon: ' + res.body.lon);
      });
  }

  render() {
    return (
      <ReactMapboxGl
        style="mapbox://styles/mapbox/light-v8"
        accessToken={accessToken}
        center={this.state.center}
        movingMethod="jumpTo"
        containerStyle={{ height: '100vh', width: '100%' }}
      />
    );
  }
}
