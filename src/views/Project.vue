<template>
  <v-card 
    class='d-flex flex-column justify-end'
    height='100%'
  >

    <v-btn 
      fab
      small
      dark
      color='purple'
      class='commentFab'
      :style='`left: ${thread.position-5}%`'
      v-for='thread in threads'
      :key='thread.position'
      @click='showComment(thread)'
    >
      <v-icon>mdi-comment</v-icon>
    </v-btn>

    <TrackPanel />

    <ControlPanel :playing='playing' @comment='addComment()' />

    <v-bottom-sheet v-model='showCommentSheet'>
      <v-sheet>
        <CommentManager :commentThread='commentThread'/>
      </v-sheet>
    </v-bottom-sheet>

  </v-card>
</template>

<script>
import TrackPanel from '../components/TrackPanel'
import ControlPanel from '../components/ControlPanel'
import CommentManager from '../components/CommentManager'

export default {
  name: 'Project',

  computed: {
    playing() {
      return this.$store.state.playing;
    },

    threads() {
      return this.$store.state.commentThreads;
    }
  },

  data() {
    return {
      showCommentSheet: false,
      commentThread: {}
    }
  },

  methods: {
    addComment() {
      this.commentThread = { comments: [], position: this.$store.state.playheadPosition };
      this.showCommentSheet = true;
    },

    showComment(thread) {
      this.commentThread = thread;
      this.showCommentSheet = true;
    }
  },

  components: {
    TrackPanel,
    ControlPanel,
    CommentManager
  }
}
</script>

<style scoped>
.commentFab {
  position: absolute;
  top: 80px;
  z-index: 1;
}
</style>