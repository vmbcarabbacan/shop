import axios from "axios";
import login from "./login";

export default {
    state: {
        categories: [],
        categoryFiltered: [],
        form: {},
        filter: {
            search: null,
            page: 1
        },
        loading: false,
        open: false,
        error: null
    },

    mutations: {

        CATEGORIES(state, payload) {
            state.categories = payload
        },

        CATEGORY_FILTERED(state, payload) {
            state.categoryFiltered = payload
        },

        CATEGORY_FILTER(state, payload) {
            state.filter = payload
        },

        CATEGORY_LOADING(state, payload) {
            state.loading = payload
        },

        CATEGORY_OPEN(state, payload) {
            state.open = payload
        },

        CATEGORY_FORM(state, payload) {
            state.form = payload
        },

        CATEGORY_ERROR(state, payload) {
            state.error = payload
        },

    },

    actions: {
        CATEGORIES({commit}, {page, search}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`

            axios.get(`/api/CATEGORIES?page=${page}`, {
                search
            })
            .then((result) => {
                commit("CATEGORIES", result.data)
                commit("CATEGORY_LOADING", false)
            })
        },

        CATEGORY_SAVE({commit, dispatch, state}, {id, name, type, isVisible}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post("/api/CATEGORY-SAVE", {
                id, name, type, isVisible
            })
            .then((result) => {
                var data = {
                    id: 0,
                    name: null,
                    type: type,
                    isVisible: 1
                }
                commit("CATEGORY_OPEN", false)
                commit("CATEGORY_FORM", data)
                dispatch("CATEGORIES", state.filter)
                commit("CATEGORY_ERROR", null)
                var catType = {
                    type
                }
                dispatch("CATEGORY_FILTER_BY_TYPE", catType)
            })
            .catch((err) => {
                commit("CATEGORY_ERROR", err.response.data)
            })

        },

        CATEGORY_FILTER_BY_TYPE({commit}, {type}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/CATEGORY/${type}`)
            .then((result) => {
                commit("CATEGORY_FILTERED", result.data)
            })
        }
    }
}