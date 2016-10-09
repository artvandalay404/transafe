/*eslint-disable semi*/
import axios from 'axios';

export function getAllCrime() {
  return axios.get('http://alexadusei.com:3000/api/getcrimes')
    .then(response => {
      return response.data;
    }).catch(err => console.warn('error in getAllCrime:', err));
}

export function getCenterCoord() {
  return axios.get('http://ip-api.com/json')
    .then(res => {
      return res.data;
    }).catch(err => console.warn('error: ' + err));
}

export function getRoute(currentLoction, destinationLocation) {
  const cLon = currentLoction[0]
  const cLat = currentLoction[1]
  const dLon = destinationLocation[0]
  const dLat = destinationLocation[1]

  return axios.get(`https://api.mapbox.com/directions/v5/mapbox/walking/${cLon}%2C${cLat}%3B${dLon}%2C${dLat}json?access_token=pk.eyJ1Ijoic29raWMiLCJhIjoiY2l0N3doaTZ1MGF1ZjJ6bXdkdzIyb3N4MiJ9.F7fsAP4czc7b23oqBML7JA&steps=true`)
    .then(res => res.data.routes[0].legs[0].steps)
    .catch(err => console.warn('error: ' + err))
}

export function addressToCoords(address) {
  return axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic29raWMiLCJhIjoiY2l0N3doaTZ1MGF1ZjJ6bXdkdzIyb3N4MiJ9.F7fsAP4czc7b23oqBML7JA&country=us&bbox=-83.3850850099883%2C42.1912129900003%2C-82.913896991592%2C42.4502300099984&autocomplete=true')
    .then(res => res.data)
    .catch(err => console.warn('error: ' + err))
}
