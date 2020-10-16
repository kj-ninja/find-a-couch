export default {
    namespaced: true,
    state: {
        coaches: [
            {
                id: 1,
                name: 'Krzysztof Jakubiak',
                price: 49,
                description: 'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 65,770 developers building projects, reviewing code, and helping each other get better.',
                portfolio: {
                    name: 'Krzysztof Jakubiak',
                    link: 'https://krzysztof-jakubiak.pl'
                },
                areas: ['frontend', 'career'],
            },
            {
                id: 2,
                name: 'Rafał Jakubiak',
                price: 79,
                description: 'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 65,770 developers building projects, reviewing code, and helping each other get better.',
                portfolio: {
                    name: 'Rafal Jakubiak',
                    link: ''
                },
                areas: ['frontend', 'backend', 'management'],
            },
            {
                id: 3,
                name: 'Sylwia Jakubiak',
                price: 49,
                description: 'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 65,770 developers building projects, reviewing code, and helping each other get better.',
                portfolio: {
                    name: 'Sylwia Jakubiak',
                    link: ''
                },
                areas: ['frontend', 'fullstack'],
            },
            {
                id: 4,
                name: 'Maximilian Schwarzmuller',
                areas: ['frontend', 'backend', 'career'],
                portfolio: {
                    name: 'Maximilian Schwarzmuller',
                    link: '',
                },
                description:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                price: 30,
            },
            {
                id: 5,
                name: 'Julie Jones',
                areas: ['backend', 'career'],
                portfolio: {
                    name: 'Julie Jones',
                    link: ''
                },
                description:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                price: 30,
            }
        ]
    },
    getters: {
        coachesList(state) {
            return state.coaches;
        },
        getCoachById: (state) => (id) => {
            return state.coaches.find(coach => coach.id === id)
        },
        hasCoaches(state) {
            return state.coaches && state.coaches.length > 0
        }
    },
    mutations: {
        addCoach(state, payload) {
            state.coaches.push(payload);
        }
    },
    actions: {
        addCoach({commit}, payload) {
            commit('addCoach', payload);
        }
    }
};