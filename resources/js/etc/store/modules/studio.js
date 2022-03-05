import axios from "axios";
import login from "./login";
import router from "../../../router";

export default {
    state: {
        all: [],
        studios: {},
        studio: {},
        loading: false,
        filter: {
            search: null,
            page: 1,
            perPage: 20
        },
        message: null,
        error: null
    },

    mutations: {
        STUDIOS(state, payload) {
            state.studios = payload
        },

        STUDIO(state, payload) {
            state.studio = payload
        },

        STUDIO_ALL(state, payload) {
            state.all = payload
        },

        STUDIO_LOADING(state, payload) {
            state.loading = payload
        },

        STUDIO_FILTER(state, payload) {
            state.filter = payload
        },

        STUDIO_MESSAGE(state, payload) {
            state.message = payload
        },

        STUDIO_ERROR(state, payload) {
            state.error = payload
        },

    },

    actions: {
        STUDIOS({commit}, {page, search, perPage}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("STUDIO_LOADING", true);
            axios.get(`/api/STUDIOS?page=${page}`, {
                params: {
                    search, perPage
                }
            })
            .then((result) => {
                commit("STUDIO_LOADING", false);
                commit("STUDIOS", result.data);
            })
        },

        STUDIO_SAVE({commit}, {id, name, color}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("STUDIO_LOADING", true);
            axios.post('/api/STUDIO-SAVE', {
                id, name, color
            })
            .then((result) => {
                var data = {
                    id: 0,
                    name: null,
                    color: '#17DFF7'
                };

                commit("STUDIO_MESSAGE", result.data);
                commit("STUDIO_ERROR", null);
                setTimeout(() => {
                    if(id > 0) {
                        router.back()
                    };
                    commit("STUDIO", data)
                    commit("STUDIO_LOADING", false);
                    commit("STUDIO_MESSAGE", null);
                }, 3000);
            })
            .catch((err) => {
                commit("STUDIO_LOADING", false);
                commit("STUDIO_MESSAGE", null);
                commit("STUDIO_ERROR", err.response.data);
                setTimeout(() => {
                    commit("STUDIO_ERROR", null)
                }, 3000);
            })
        },

        
        STUDIO_GET({commit}, {id}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/STUDIO-GET/${id}`)
            .then((result) => {
                commit("STUDIO", result.data);
            })
        }
    }
}