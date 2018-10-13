import Vue from 'vue'
import Vuex from 'vuex'
import teamModule from './modules/teamModule'
import listModule from './modules/listModule'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    teamModule,
    listModule
  }
});