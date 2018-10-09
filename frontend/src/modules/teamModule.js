
export default {
    state: {
        team: []
    },
    getters: {
        team: state => state.team,
        getFirstInParty: state => state.team[0]
    },
    mutations: {
        addToTeam(state, { pokemon }) {
            if (state.team.length < 6) state.team.push(pokemon)
        },
    },
    actions: {

    }
}
