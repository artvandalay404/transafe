/* eslint-disable semi, quotes */
import React, { Component } from 'react';
import Btn from './Btn';
import Map from './Map';
import * as api from '../api/api';

const styles = {
  mainContainer: {
    textAlign: 'center',
    display: 'block',
    marginTop:  '3em',
    marginLeft: '10em',
    marginTop: '1em',
    backgroundColor: 'transparent',
    marginTop: '-925px',
    position: 'relative',
    zIndex: '2'
  },
  button: {
    marginTop: '0.25em',
    width: '6em'
  },
  destination: {
    width: '60em'
  }
};

export default class MapView extends Component {
  constructor () {
    super();
    this.state = {
      startingPoint: '',
      endingPoint: '',
    };
  }

  componentDidMount () {
    api.getCenterCoord()
      .then(center => {
        this.setState({startingPoint: [center.lon, center.lat]});
    });
  }

  buttonOnClick() {
    console.log("NEEEEEEW STATE:", this.state.endingPoint)

    const address = this.state.endingPoint

    api.addressToCoords(address)
      .then(destData => {

        console.log("OUR DEST DATA:", destData)

        destData.features.map(destination => {
          let destCoords = {}

          if (address === destination['place_name']) {
            destCoords = {
              lon: destination.geometry.coordinates[0],
              lat: destination.geometry.coordinates[1]
            }
            console.log("Your address of " + address + " has become: ", destCoords)

          }
        })
      })

    // api.getRoute()
    //   .then(routeSteps => {
    //     const {distance, duration, name, maneuver} = routeSteps



    //     return routeSteps
    //   })
    //   .catch(err => console.warn('Error in buttonOnClick:', err))
  }

  updateText (destination) {
    console.log(destination)
    this.setState({endingPoint: destination})
  }

  render() {
    return (
      <div>
        <Map />
        <div style={styles.mainContainer} >
          <div style={styles.destination} >
            <textarea className={styles.destination} onChange={e => this.updateText(e.target.value)} type='text' placeholder='Destination' />
            <div style={styles.button} >
              <Btn onClick={this.buttonOnClick()} text="Get Directions" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
