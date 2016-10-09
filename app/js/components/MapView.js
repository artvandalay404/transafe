/* eslint-disable semi, quotes */
import React, { Component } from 'react';
import Btn from './Btn';
import Map from './Map';
import * as api from '../api/api';

const styles = {
  mainContainer: {
    textAlign: 'center',
    display: 'block',
    marginTop: '1em',
    marginTop: '-925px',
    position: 'relative',
  },
  button: {
    marginTop: '0.25em',
  },
  destination: {
  }
};

export default class MapView extends Component {
  constructor () {
    super();
    this.state = {
      startingPoint: '',
      endingPoint: '',
      routes: {},
    };
  }

  componentDidMount () {
    api.getCenterCoord()
      .then(center => {
        this.setState({startingPoint: [center.lon, center.lat]});
    });
  }

  buttonOnClick(address) {
    api.addressToCoords(address)
      .then(destData => {
        return destData.features.map(destination => {
          let destCoords = {}

          if (address === destination['place_name']) {
            console.log("WE FOUND WHAT WE ARE LOOKING FOR:", destination.geometry.coordinates)
            return destination.geometry
          }
        })[0]
      })
      .then((destData) => {
        const destCoords = destData.coordinates
        return api.getRoute(this.state.startingPoint, destCoords)
      })
      .then(routeSteps => {
        const {distance, duration, name, maneuver} = routeSteps

        console.log("AND HERE ARE YOUR ROUTE STEPS!!!:", routeSteps)

        this.setState({'routes': routeSteps})

        return routeSteps
      })
      .catch(err => console.warn('Error in buttonOnClick:', err))
  }

  updateText (destination) {
    this.setState({endingPoint: destination})
  }

  render() {
    return (
      <div>
        <Map routes={this.state.routes}/>
        <div style={styles.mainContainer} >
          <div style={styles.destination} >
            <textarea rows='3' cols='50' className={styles.destination} onChange={e => this.updateText(e.target.value)} type='text' placeholder='Destination' />
            <div style={styles.button} >
              <Btn onClick={e => this.buttonOnClick(this.state.endingPoint)} text="Get Directions" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
