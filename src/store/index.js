import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getURL: "https://corona-xiv.herokuapp.com/?title=",
    filters:{
      peer_reviewed: false,
      only_covid: false
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
