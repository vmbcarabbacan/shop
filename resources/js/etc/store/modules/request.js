import axios from "axios"
import login from "./login"

export default {
    state: {
        count: null,
        loading: false,
        fetch: {},
        openTransaction: false,
        transaction: {},
        filter: {}
    },

    mutations: {
        REQUEST_COUNT_M(state, payload) {
            state.count = payload
        },

        REQUEST_LOADING(state) {
            state.loading = !state.loading
        },

        REQUEST_FETCH_M(state, payload) {
            state.fetch = payload
        },

        REQUEST_FILTER_M(state, payload) {
            state.filter = payload
        },

        REQUEST_OPEN_TRANSACTION(state) {
            state.openTransaction = !state.openTransaction
        },

        REQUEST_VIEW_TRANSACTION(state, payload) {
            state.transaction = payload
        }
    },

    actions: {
        REQUEST_SAVE({}, {filter}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/REQUEST-SEND', {
                    filter
                })
                .then((result) => {
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        REQUEST_COUNT({commit}) {
            axios.get('/api/REQUEST-COUNT')
            .then((result) => {
                commit("REQUEST_COUNT_M", result.data)
            })
        },

        REQUEST_FETCH({commit}, {status, page, perPage, type, search}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("REQUEST_LOADING")
            axios.get(`/api/REQUEST-FETCH?page=${page}`, {
                params: {
                    status, perPage, type, search
                }
            })
            .then((result) => {
                commit("REQUEST_FETCH_M", result.data)
                commit("REQUEST_LOADING")
            })
        },

        REQUEST_PROCESS_TRANSACTION({commit, dispatch, state}, {filter, status}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("REQUEST_LOADING");
            axios.post('/api/REQUEST-PROCESS-TRANSACTION', {
                filter, status
            })
            .then((result) => {
                dispatch("REQUEST_FETCH", state.filter)
                dispatch("REQUEST_COUNT");
                commit("REQUEST_LOADING");
                commit("REQUEST_OPEN_TRANSACTION");
            })
        },

        REQUEST_PROCESS_PRODUCT_OPTION({commit, dispatch, state}, {filter, status}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("REQUEST_LOADING");
            axios.post('/api/REQUEST-PROCESS-PRODDUCT-OPTION', {
                filter, status
            })
            .then((result) => {
                dispatch("REQUEST_FETCH", state.filter)
                dispatch("REQUEST_COUNT");
                commit("REQUEST_LOADING");
                commit("REQUEST_OPEN_TRANSACTION");
            })
        },

        REQUEST_PROCESS_CHANGE_PAYMENT_OPTION({commit, dispatch, state}, {filter, status}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("REQUEST_LOADING");
            axios.post('/api/REQUEST-PROCESS-CHANGE-PAYMENT-OPTION', {
                filter, status
            })
            .then((result) => {
                dispatch("REQUEST_FETCH", state.filter)
                dispatch("REQUEST_COUNT");
                commit("REQUEST_LOADING");
                commit("REQUEST_OPEN_TRANSACTION");
            })
        }
    }
}