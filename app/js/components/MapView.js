import React, { Component } from 'react';
import Btn from './Btn';
import Map from './Map';
import TextInput from './TextInput';

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

  buttonOnClick() {
    console.log('D-TOWN');
  }

  render() {
    return (
      <div>
        <Map />
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
        </div>
      </div>
    );
  }
}
