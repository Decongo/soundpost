import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showBackButton: false,
    projectName: "",
    appBarTitle: "Soundpost"
  },
  mutations: {
    toProject(state, projectName) {
      state.projectName = projectName;
      state.appBarTitle = projectName;
      state.showBackButton = true;
    },

    toHome(state) {
      state.appBarTitle = 'Soundpost';
      state.showBackButton = false;
    }
  },
  actions: {
  },
  modules: {
  }
})
