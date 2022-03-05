import axios from "axios";
import router from "../../../router";
import login from "./login";

export default {
    state: {
        dateRanges: {},
        dateRange: {},
        loading: false,
        filter: {
            search: null,
            page: 1,
            perPage: 20
        },
        open: false,
        message: null,
        error: null,
        setup: {},
        all: [],
        allSams: [],
        termAll: [],
    },

    mutations: {
        DATERANGES(state, payload) {
            state.dateRanges = payload
        },

        DATERANGE(state, payload) {
            state.dateRange = payload
        },

        DATERANGE_ALL(state, payload) {
            state.all = payload
        },

        DATERANGE_ALL_SAMS(state, payload) {
            state.allSams = payload
        },

        DATERANGE_SETUP(state, payload) {
            state.setup = payload
        },

        DATERANGE_MESSAGE(state, payload) {
            state.message = payload
        },

        DATERANGE_ERROR(state, payload) {
            state.error = payload
        },

        DATERANGE_OPEN(state, payload) {
            state.open = payload
        },

        DATERANGE_LOADING(state, payload) {
            state.loading = payload
        },

        DATERANGE_FILTER(state, payload) {
            state.filter = payload
        },

        DATERANGES_GET_ALL(state, payload) {
            state.termAll = payload
        },
    },

    actions: {
        DATERANGES({commit}, {page, search, perPage}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("DATERANGE_LOADING", true);
            axios.get(`/api/DATERANGES?page=${page}`, {
                params: {
                    search,
                    perPage
                }
            })
            .then((result) => {
                commit("DATERANGE_LOADING", false)
                commit("DATERANGES", result.data)
            })
        },

        DATERANGE_SAVE({commit}, {id, name, start, end, is_end}){
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("DATERANGE_LOADING", true);
            axios.post('/api/DATERANGE-SAVE', {
                id, name, start, end, is_end
            })
            .then((result) => {
                var data = {
                    id: 0,
                    name: null,
                    start: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                    end: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
                    is_end: false
                } 
                commit("DATERANGE_MESSAGE", result.data)
                commit("DATERANGE_ERROR", null)
                
                setTimeout(() => {
                    if(id > 0) {
                        router.back()
                    }
                    commit("DATERANGE_LOADING", false);
                    commit("DATERANGE", data)
                    commit("DATERANGE_MESSAGE", null)
                }, 3000);
            })
            .catch((err) => {
                commit("DATERANGE_LOADING", false);
                commit("DATERANGE_MESSAGE", null)
                commit("DATERANGE_ERROR", err.response.data)
                setTimeout(() => {
                    commit("DATERANGE_ERROR", null)
                }, 3000);
            })
        },

        DATERANGE_GET({commit}, {id}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/DATERANGE-GET/${id}`)
            .then((result) => {
                commit("DATERANGE", result.data)
            })
        },

        DATERANGE_SETUP({commit, dispatch}, {id}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post('/api/DATERANGE-SETUP', {
                id
            })
            .then((result) => {
                commit("DATERANGE_SETUP", result.data);
                dispatch("LOCATION_ALL")
            })
        },

        DATERANGE_SETUP_SAVE({commit}, {dateRangeId, locationIds}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post('/api/DATERANGE-SETUP-SAVE', {
                dateRangeId, locationIds
            })
            .then((result) => {
                commit("DATERANGE_OPEN", false)
            })
        },

        DATERANGE_ALL({commit}, {id}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/DATERANGE-ALL/${id}`)
            .then((result) => {
                commit("DATERANGE_ALL", result.data)
            })
        },

        DATERANGE_ALL_SAMS({commit}, {id}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/DATERANGE-ALL-SAMS/${id}`)
            .then((result) => {
                commit("DATERANGE_ALL_SAMS", result.data)
                commit("SAMS_SCHEDULES", [])
            })
        },

        DATERANGES_GET_ALL({commit}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/DATERANGE-GET-ALL-VISIBLE`)
            .then((result) => {
                commit("DATERANGES_GET_ALL", result.data)
            })
        },
    }
}