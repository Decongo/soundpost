<template>
  <v-card 
    class='d-flex flex-column justify-end'
    height='100%'
  >

    <TrackPanel />

    <ControlPanel :playing='playing' />

  </v-card>
</template>

<script>
import TrackPanel from '../components/TrackPanel'
import ControlPanel from '../components/ControlPanel'

export default {
  name: 'Project',

  computed: {
    playing() {
      return this.$store.state.playing;
    }
  },

  components: {
    TrackPanel,
    ControlPanel
  }
}
</script>