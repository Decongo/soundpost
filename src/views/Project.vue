<template>
  <v-card 
    class='d-flex flex-column justify-end'
    height='100%'
  >

    <v-card
      class='flex-grow-1'
      color='grey darken-3'
      flat
      dark
      tile
    >
      
      <Track 
        v-for='track in tracks'
        :key='track'
        :trackName='track' 
        :trackColor='getColor(track)' 
        class='my-4'
        @click.native='selectTrack(track)'
      />
    </v-card>

    <v-card 
      class='d-flex justify-center align-center'
      color='purple darken-4'
      height='20%'
      dark
      tile
    >
      <v-btn icon class='ma-2'>
        <v-icon x-large>mdi-skip-previous</v-icon>
      </v-btn>
      <v-btn v-if='!playing' icon class='ma-2' @click='play()'>
        <v-icon x-large>mdi-play</v-icon>
      </v-btn>
      <v-btn v-else icon class='ma-2' @click='pause()'>
        <v-icon x-large>mdi-pause</v-icon>
      </v-btn>
      <v-btn icon class='ma-2'>
        <v-icon large>mdi-comment</v-icon>
      </v-btn>
    </v-card>
  </v-card>
</template>

<script>
import Track from '../components/Track'

export default {
  name: 'Project',

  computed: {
    playing() {
      return this.$store.state.playing;
    }
  },

  data() {
    return {
      tracks: ["Vocals", "Guitar", "Bass", "Drums"],
      selectedTrack: ""
    }
  },

  methods: {
    play() {
      this.$store.commit('play');
    },
    pause() {
      this.$store.commit('pause');
    },
    selectTrack(track) {
      this.selectedTrack = track;
    },
    getColor(track) {
      return this.selectedTrack === track ? 'grey' : 'grey darken-2'
    }
  },

  components: {
    Track
  }
}
</script>