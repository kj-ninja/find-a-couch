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
  },
  mutations: {
  },
  actions: {
  },
});
