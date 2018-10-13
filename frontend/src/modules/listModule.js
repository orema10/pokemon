export default {
    state: {
        currentPage: 1,
    },
    getters: {
        currentPage: state => state.currentPage,
    },
    mutations: {
        updatePage(state, { page }) {
            state.currentPage = page
        },
    },
    actions: {

    }
}