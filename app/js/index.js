import React     from 'react';
import ReactDOM  from 'react-dom';
import Map from './components/Map.js';

if ( process.env.NODE_ENV !== 'production' ) {
  // Enable React devtools
  window.React = React;
}

ReactDOM.render(<Map />, document.getElementById('app'));
