import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    getURL: "https://corona-xiv.herokuapp.com/?title=",
    filters:{
      peerReviewed: false,
      onlyCovid: false
    }
  },
  getters:{
    filters(state){
      return state.filters
    }
  },
  mutations: {
    updateFilterState(state, payload){
      state.filters = payload
    }
  },
  actions: {
    updateFilterState({ commit }, payload){
      commit('updateFilterState', payload)
    }
  },
  modules: {
  }
})
