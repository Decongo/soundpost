<template>
  <v-app>
    <NavBar />
    <v-content class='grey darken-3'>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import NavBar from './components/NavBar'

export default {
  name: 'App',

  data: () => ({
    //
  }),

  components: {
    NavBar
  }
};
</script>
