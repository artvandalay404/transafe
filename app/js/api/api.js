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
