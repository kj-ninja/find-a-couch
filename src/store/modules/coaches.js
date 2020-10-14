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
                portfolio: {
                    name: 'Krzysztof Jakubiak',
                    link: 'https://krzysztof-jakubiak.pl'
                },
                areas: ['Front-end', 'Back-end', 'Career'],
            },
            {
                id: 2,
                name: 'Rafał Jakubiak',
                price: 79,
                email: 'qbik85@gmail.com',
                message: 'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 65,770 developers building projects, reviewing code, and helping each other get better.',
                portfolio: {
                    name: 'Krzysztof Jakubiak',
                    link: 'https://krzysztof-jakubiak.pl'
                },
                areas: ['Front-end', 'Back-end', 'Team Managements'],
            },
            {
                id: 3,
                name: 'Sylwia Jakubiak',
                price: 49,
                email: 'sylwia@gmail.com',
                message: 'Solve real-world HTML, CSS and JavaScript challenges whilst working to professional designs. Join 65,770 developers building projects, reviewing code, and helping each other get better.',
                portfolio: {
                    name: 'Krzysztof Jakubiak',
                    link: 'https://krzysztof-jakubiak.pl'
                },
                areas: ['Front-end', 'Fullstack'],
            },
            {
                id: 4,
                name: 'Maximilian Schwarzmuller',
                areas: ['Front-end', 'Back-end', 'Career'],
                message:
                    "I'm Maximilian and I've worked as a freelance web developer for years. Let me help you become a developer as well!",
                price: 30,
                portfolio: {
                    name: 'Krzysztof Jakubiak',
                    link: 'https://krzysztof-jakubiak.pl'
                },
            },
            {
                id: 5,
                name: 'Julie Jones',
                areas: ['Front-end', 'Career'],
                message:
                    'I am Julie and as a senior developer in a big tech company, I can help you get your first job or progress in your current role.',
                price: 30,
                portfolio: {
                    name: 'Krzysztof Jakubiak',
                    link: 'https://krzysztof-jakubiak.pl'
                },
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
    }
};