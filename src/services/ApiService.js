import axios from 'axios';

export default {

  searchArist(artist){
      
    var options = {
        method: 'GET',
        url: 'https://genius.p.rapidapi.com/search',
        params: {q: `${artist}`},
        headers: {
            'x-rapidapi-key': 'fff3977e35msh4153410368f5b6dp1a0c99jsnf3f62793699d',
            'x-rapidapi-host': 'genius.p.rapidapi.com'
        }
    };
        
    return axios.request(options)
  }
}