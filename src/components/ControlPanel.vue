<template>
  <v-card 
      class='d-flex justify-center align-center'
      color='purple darken-4'
      height='20%'
      dark
      tile
  >
    <v-btn icon class='ma-2' @click='skipTop()'>
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
</template>

<script>
export default {
  name: 'ControlPanel',

  props: {
    playing: String
  },

  methods: {
    play() {
      this.$store.commit('play');
    },
    pause() {
      this.$store.commit('pause');
    },
    skipTop() {
      this.$store.commit('skipTop');
    }
  }
}
</script>