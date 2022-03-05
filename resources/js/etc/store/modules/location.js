import axios from "axios";
import router from "../../../router";
import login from "./login";

export default {
    state: {
        all: [],
        locations: {},
        location: {},
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
        LOCATIONS(state, payload) {
            state.locations = payload
        },

        LOCATION(state, payload) {
            state.location = payload
        },

        LOCATION_ALL(state, payload) {
            state.all = payload
        },

        LOCATION_ERROR(state, payload) {
            state.error = payload
        },

        LOCATION_MESSAGE(state, payload) {
            state.message = payload
        },

        LOCATION_FILTER(state, payload) {
            state.filter = payload
        },

        LOCATION_LOADING(state, payload) {
            state.loading = payload
        },
    },

    actions: {
        LOCATIONS({commit}, {page, search, perPage}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("LOCATION_LOADING", true);
            axios.get(`/api/LOCATIONS?page=${page}`, {
                params: {
                    search,
                    perPage
                }
            })
            .then((result) => {
                commit("LOCATION_LOADING", false)
                commit("LOCATIONS", result.data)
            })
        },

        LOCATION_SAVE({commit}, {id, name, is_visible, weekdays}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("LOCATION_LOADING", true)
            axios.post('/api/LOCATION-SAVE', {
                id, name, is_visible, weekdays
            })
            .then((result) => {
                var data = {
                    id: 0,
                    name: null,
                    is_visible: true,
                    weekdays: [
                        {
                            id: 0,
                            day_id: 1,
                            name: "Monday",
                            value: 0
                        },
                        {
                            id: 0,
                            day_id: 2,
                            name: "Tuesday",
                            value: 0
                        },
                        {
                            id: 0,
                            day_id: 3,
                            name: "Wednesday",
                            value: 0
                        },
                        {
                            id: 0,
                            day_id: 4,
                            name: "Thursday",
                            value: 0
                        },
                        {
                            id: 0,
                            day_id: 5,
                            name: "Friday",
                            value: 0
                        },
                        {
                            id: 0,
                            day_id: 6,
                            name: "Saturday",
                            value: 0
                        },
                        {
                            id: 0,
                            day_id: 7,
                            name: "Sunday",
                            value: 0
                        }
                    ]
                }
                commit("LOCATION_MESSAGE", result.data)
                commit("LOCATION_ERROR", null)

                setTimeout(() => {
                    if(id > 0) {
                        router.back()
                    }
                    commit("LOCATION", data)
                    commit("LOCATION_LOADING", false)
                    commit("LOCATION_MESSAGE", null)
                }, 3000);
            })
            .catch((err) => {
                commit("LOCATION_LOADING", false)
                commit("LOCATION_MESSAGE", null)
                commit("LOCATION_ERROR", err.response.data)
                setTimeout(() => {
                    commit("LOCATION_ERROR", null)
                }, 3000);
            })
        },

        LOCATION_GET({commit}, {id}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/LOCATION-GET/${id}`)
            .then((result) => {
                commit("LOCATION", result.data);
            })
        },

        LOCATION_ALL({commit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get('/api/LOCATION-ALL')
            .then((result) => {
                commit("LOCATION_ALL", result.data);
                commit("DATERANGE_OPEN", true);
            })
        }
    }
}