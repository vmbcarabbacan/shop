import axios from "axios"
import login from "./login"

export default {
    state: {
        active: [],
        forms: {},
        form: {},
        filter: {
            search: null,
            page: 1,
            perPage: 20
        },
        loading: false,
    },

    mutations: {
        FORMS_M(state, payload) {
            state.forms = payload
        },
        FORM_M(state, payload) {
            state.form = payload
        },
        FORM_FILTER_M(state, payload) {
            state.filter = payload
        },
        FORM_LOADING_M(state) {
            state.loading = !state.loading
        },
        FORM_ACTIVE_M(state, payload) {
            state.active = payload
        },
    },

    actions: {
        FORMS({commit}, {page, search, perPage}) {
            axios.defaults.headers.common['Authorization']  = `Bearer ${login.state.token}`;

            commit("FORM_LOADING_M")
            axios.get(`/api/FORMS?page=${page}`, {
                search, perPage
            })
            .then((result) => {
                commit("FORM_LOADING_M")
                commit("FORMS_M", result.data)
            })
            .catch(() => {
                commit("FORM_LOADING_M")
            })
        },

        FORM_FILTER({commit}, {slug}) {
            axios.get(`/api/FORM-FILTER/${slug}`)
            .then((result) => {
                commit("FORM_M", result.data)
            })
        },

        FORM_SAVE({commit, dispatch, state}, {id, name, body, isShow}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                commit("FORM_LOADING_M")
                axios.post('/api/FORM-SAVE', {
                    id, name, body, isShow
                })
                .then((result) => {
                    commit("FORM_LOADING_M")
                    dispatch("FORMS", state.filter)
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                    commit("FORM_LOADING_M")
                })
            })
        },

        FORM_ACTIVE({commit}) {
            axios.get('/api/FORM-ACTIVE')
            .then((result) => {
                commit("FORM_ACTIVE_M", result.data)
            })
        }
    }
}