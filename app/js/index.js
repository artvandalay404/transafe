import React     from 'react';
import ReactDOM  from 'react-dom';
import MapView from './components/MapView.js';

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

ReactDOM.render(<MapView />, document.getElementById('app'));
