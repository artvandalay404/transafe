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
  console.log("Current Location:", currentLoction)
  console.log("Target Location:", destinationLocation)

  const cLon = currentLoction['lon']
  const cLat = currentLoction['lat']
  const dLon = destinationLocation['lon']
  const dLat = destinationLocation['lat']

  return axios.get('https://api.mapbox.com/directions/v5/mapbox/walking/-73.989%2C40.733%3B-74%2C40.733.json?access_token=pk.eyJ1Ijoic29raWMiLCJhIjoiY2l0N3doaTZ1MGF1ZjJ6bXdkdzIyb3N4MiJ9.F7fsAP4czc7b23oqBML7JA&steps=true')
    .then(res => res.data.routes[0].legs[0].steps)
    .catch(err => console.warn('error: ' + err))
}

export function addressToCoords(address) {
  return axios.get('https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic29raWMiLCJhIjoiY2l0N3doaTZ1MGF1ZjJ6bXdkdzIyb3N4MiJ9.F7fsAP4czc7b23oqBML7JA&country=us&bbox=-83.3850850099883%2C42.1912129900003%2C-82.913896991592%2C42.4502300099984&autocomplete=true')
    .then(res => res.data)
    .catch(err => console.warn('error: ' + err))
}
