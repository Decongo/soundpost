<template>
  <v-app-bar app color="purple darken-4" dark>
    <v-app-bar-nav-icon v-show='$store.state.showBackButton'>
      <template>
        <v-icon large @click='toHome()'>mdi-chevron-left</v-icon>
      </template>
    </v-app-bar-nav-icon>

    <v-toolbar-title>{{$store.state.appBarTitle}}</v-toolbar-title>
    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon large>mdi-account-circle-outline</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  name: 'NavBar',

  methods: {
    toHome() {
      this.$store.commit('toHome');
      this.$router.push('/');
    }
  }
}
</script>