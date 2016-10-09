import request from 'superagent';
import axios from 'axios'

export function getAllCrime() {
  return axios.get('http://alexadusei.com:3000/api/getcrimes')
    .then(response => {
      console.log(response.data)
      return response.data
    })
    .catch(err => console.warn("error in getAllCrime:", err))
}