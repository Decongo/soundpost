<template>
  <div>
    <v-btn 
      block 
      x-large 
      dark 
      class='grey darken-2'
    >
      {{projectTitle}}
    </v-btn>
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