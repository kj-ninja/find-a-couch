export default {
    namespaced: true,
    state: {
        coaches: [
            {
                id: 1,
                name: 'Krzysztof Jakubiak',
                price: 49,
                email: 'jakubiak.krzy@gmail.com',
                message: 'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 65,770 developers building projects, reviewing code, and helping each other get better.',
                tags: [
                    {
                        name: 'Front-end',
                        class: 'is-info is-light'
                    },
                    {
                        name: 'Career',
                        class: 'is-success is-light'
                    },
                ]
            },
            {
                id: 2,
                name: 'Rafał Jakubiak',
                price: 79,
                email: 'qbik85@gmail.com',
                message: 'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 65,770 developers building projects, reviewing code, and helping each other get better.',
                tags: [
                    {
                        name: 'Front-end',
                        class: 'is-info is-light'
                    },
                    {
                        name: 'Back-end',
                        class: 'is-primary is-light'
                    },
                    {
                        name: 'Team Managements',
                        class: 'is-success is-light'
                    },
                ]
            },
            {
                id: 3,
                name: 'Sylwia Jakubiak',
                price: 49,
                email: 'sylwia@gmail.com',
                message: 'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 65,770 developers building projects, reviewing code, and helping each other get better.',
                tags: [
                    {
                        name: 'Front-end',
                        class: 'is-info is-light'
                    },
                    {
                        name: 'Fullstack',
                        class: 'is-success is-light'
                    },
                ]
            }
        ]
    },
    getters: {
        coachesList(state) {
            return state.coaches;
        },
        getCoachById: (state) => (id) => {
            return state.coaches.find(coach => coach.id === id)
        }
    }
};