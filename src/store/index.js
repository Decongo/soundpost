import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    projectName: ""
  },
  mutations: {
    setProjectName(state, projectName) {
      state.projectName = projectName;
    }
  },
  actions: {
  },
  modules: {
  }
})
