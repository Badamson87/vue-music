import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

let musicApi = axios.create({
  baseURL: 'https://itunes.apple.com/search?callback=?&term=',
  timeout: 3000
})


Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {

  }
})
