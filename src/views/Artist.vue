<template>
  <div class="home">
    <h1>Let's Look up Some Lyrics</h1>

    <form>
      <label for="searh-bar">Search Artist:</label>
      <input type="text" v-model="artist" id="search-bar">

      <button @click.prevent="call">Search</button>
    </form>

    <ul>
      <li v-for="song in songs" :key="song">{{song}}</li>
    </ul>
  </div>
</template>

<script>
// @ is an alias to /src
import ApiService from '../services/ApiService.js'

export default {
  data(){
    return {
      artist: '',
      songs: []
    }
  },
  methods: {
    call(){
      ApiService.searchArist(this.artist)
      
      .then(response => {
        console.log(response.data.response.hits);

        let hits = response.data.response.hits

        hits.forEach(h => {
          this.songs.push(h.result.full_title)
        })
    })

    .catch(error => {
        console.error(error);
    });
    }
  }
}
</script>

<style scoped>
li{
  list-style-type: none;
  text-align: start;
  margin: 1em 0 1em 0;
}
</style>
