<template>
  <div>
    <v-card :color='trackColor'>
      <v-img src='images/soundwave.png' class='pa-2'>
        <p>{{trackName}}</p>
      </v-img>
    </v-card>
  </div>
</template>

<script>
export default {
  name: 'Track',

  props: {
    trackName: String,
    trackColor: String
  },
}
</script>