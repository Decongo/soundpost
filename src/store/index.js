import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    showBackButton: false,
    projectName: "",
    appBarTitle: "Soundpost",
    playing: false,
    playheadPosition: 0,
  },
  mutations: {
    toProject(state, projectName) {
      state.projectName = projectName;
      state.appBarTitle = projectName;
      state.showBackButton = true;
      state.playheadPosition = 0;
    },

    toHome(state) {
      state.appBarTitle = 'Soundpost';
      state.showBackButton = false;
    },

    play(state) {
      state.playing = true;

      const animatePlayhead = () => {
        if (state.playheadPosition >= 99) {
          state.playheadPosition = 99;
          state.playing = false;
        }
        else {
          state.playheadPosition += 0.05;
        }

        if (state.playing) setTimeout(animatePlayhead, 1);
      }

      setTimeout(animatePlayhead, 1);
    },

    pause(state) {
      state.playing = false;
    },

    skipTop(state) {
      state.playheadPosition = 0;
    }
  },
  actions: {
  },
  modules: {
  }
})
