export default {
    namespaced: true,
    state: {
        requests: [
            {
                message: 'Mordo pomoz mi z nauka jsa!',
                email: 'jakubiak.krzy@gmail.com',
                name: 'Andrzejku',
                requestId: 100,
                coachId: 1
            },
            {
                message: 'Byczku pomoz mi z nauka phpa!',
                email: 'qbik85@gmail.com',
                name: 'Jozek',
                requestId: 200,
                coachId: 2
            }
        ]
    },
    getters: {
        requests(state, getters, rootState, rootGetters) {
            const coachId = rootGetters.userId;
            return state.requests.filter(request => request.coachId === coachId);
        },
        hasRequests(state, getters) {
            return getters.requests && getters.requests.length > 0
        }
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