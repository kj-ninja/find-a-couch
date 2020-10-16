export default {
    namespaced: true,
    state: {
        requests: []
    },
    getters: {

    },
    mutations: {
        addRequest(state, payload) {
            state.requests.push(payload);
        }
    },
    actions: {
        addRequest({commit}, payload) {
            commit('addRequest', payload);
        }
    }
};