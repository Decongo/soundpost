<template>
  <div class="home">
    <ProjectTag @click.native='toProject("My Song 1")' :projectTitle='"My Song 1"' class='my-4'/>
    <ProjectTag @click.native='toProject("An Idea")' :projectTitle='"An Idea"' class='my-4'/>
    <ProjectTag @click.native='toProject("Song")' :projectTitle='"Song"' class='my-4'/>

    <v-btn 
      fab 
      color='grey darken-2' 
      dark
      absolute
      right
    >
      <v-icon x-large dark class='pa-0'>mdi-plus-thick</v-icon>
    </v-btn>
  </div>
</template>

<script>
import ProjectTag from '../components/ProjectTag'

export default {
  name: 'Home',

  components: {
    ProjectTag
  },

  mounted() {
    this.$store.commit('setAppBarTitle', "Soundpost")
  },

  methods: {
    toProject(projectName) {
      this.$store.commit('toProject', projectName);
      this.$router.push('/project');
    }
  }
}
</script>