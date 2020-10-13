import Vue from 'vue';
import Vuex from 'vuex';
import coachesModule from "@/store/modules/coaches";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coaches: coachesModule
  },
  state: {
  },
  mutations: {
  },
  actions: {
  },
});
