import Vue from 'vue';
import Vuex from 'vuex';
import coachesModule from "@/store/modules/coaches";
import requestsModule from '@/store/modules/requests';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state: {
    userId: 1
  },
  getters: {
    userId(state) {
      return state.userId;
    }
  },
  mutations: {
  },
  actions: {
  },
});
