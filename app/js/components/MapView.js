import React, { Component } from 'react';
import Btn from './Btn';
import Map from './Map';
import TextInput from './TextInput';
<<<<<<< HEAD
import * as api from '../api/api';
=======

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

>>>>>>> d33fd680146141a9bb0034cadcb6ac921a694800

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
<<<<<<< HEAD
        <div>
          <textarea 
            onChange={e => this.updateText(e.target.value)}
            type='text'
            placeholder='Destination' />
          <Btn onClick={this.buttonOnClick(e.target.value)} text="Get Directions" />
=======
        <div style={styles.mainContainer} >
          <div style={styles.destination} >
            <TextInput placeholder="Destination" />
              <div style={styles.button} >
              <Btn
                onClick={this.buttonOnClick}
                text="Get Directions"
              />
             </div>
          </div>
>>>>>>> d33fd680146141a9bb0034cadcb6ac921a694800
        </div>
      </div>
    );
  }
}
