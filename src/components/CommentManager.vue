<template>
  <div>
    <div>
      <div v-for='comment in commentThread.comments' :key='comment.message' class='ma-2'>
        <v-icon>mdi-account-circle-outline</v-icon>
        {{comment}}
      </div>
    </div>

    <div>
      <v-textarea 
        auto-grow
        clearable
        placeholder='Enter a comment...'
        v-model='currentComment'
      ></v-textarea>
      <v-btn @click='post()'>Post</v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommentManager',

  props: {
    commentThread: Object
  },

  data() {
    return {
      currentComment: "",
    }
  },

  methods: {
    post() {
      this.commentThread.comments.push(this.currentComment);
      this.$store.commit('addComment', this.commentThread);
      this.currentComment = "";
    }
  }
}
</script>