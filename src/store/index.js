import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import config from './config'
import User from './user'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: { config, User },
  getters
})

export default store
