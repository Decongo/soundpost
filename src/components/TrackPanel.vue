<template>
  <v-card
    class='flex-grow-1'
    color='grey darken-3'
    flat
    dark
    tile
  >
    
    <div id='playhead' :style='`left: ${playheadPosition}`'></div>

    <Track 
      v-for='track in tracks'
      :key='track'
      :trackName='track' 
      :trackColor='getColor(track)' 
      class='my-4'
      @click.native='selectTrack(track)'
    />
  </v-card>
</template>

<script>
import Track from './Track'

export default {
  name: 'TrackPanel',

  data() {
    return {
      tracks: ["Vocals", "Guitar", "Bass", "Drums"],
      selectedTrack: "",
      // playheadPosition: '0'
    }
  },

  computed: {
    playheadPosition() {
      const playheadValue = this.$store.state.playheadPosition;
      if (playheadValue > 0) return playheadValue + '%';
      return playheadValue;
    }
  },

  methods: {
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

<style scoped>
#playhead {
  border-left: 2px solid white;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 1;
}
</style>