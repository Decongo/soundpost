<template>
  <div>
    <v-card class='py-2 grey darken-2'>
      <v-card-text class='white--text'>{{projectTitle}}</v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'ProjectTag',

  props: {
    projectTitle: String
  }
}
</script>