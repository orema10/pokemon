import utiles from '../services/utiles'
import Vue from 'vue'

export default {
    state: {
        team:[],
    },
    getters: {
        team: state => state.team,
        getFirstInParty: state => state.team[0]
    },
    mutations: {
        addToTeam(state, { pokemon }) {
            if (state.team.length < 6) state.team.push(pokemon)
        },
        move(state, { pokemon }) {
            var newTeam = utiles.swapInArray(state.team, pokemon, state.team[0])
            Vue.set(state.team ,{ newTeam })
        },
    },
    actions: {

    }
}