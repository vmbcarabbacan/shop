import axios from "axios";
import login from "./login";

export default {
    state: {
        deletedUsers: {},
        loading: false,
        filter: {
            page: 1,
            perPage: 20,
            search: null
        }
    },

    mutations: {
        ADMIN_DELETED_USER(state, payload) {
            state.deletedUsers = payload
        },

        ADMIN_FILTER(state, payload) {
            state.filter = payload
        },

        ADMIN_LOADING(state, payload) {
            state.loading = payload
        }
    },

    actions: {
        ADMIN_DELETED_USER({commit}, {page, perPage, search}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("ADMIN_LOADING", true)
            axios.get(`/api/USER-DELETED-USER?page=${page}`, {
                params: {
                    perPage, search
                }
            })
            .then((result) => {
                commit("ADMIN_DELETED_USER", result.data)
                commit("ADMIN_LOADING", false)
            })
        },

        ADMIN_RESTORE_DELETED({dispatch, state}, {id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/USER-RESTORE-DELETED/${id}`)
            .then((result) => {
                var data = {
                    page: state.filter.page,
                    perPage: state.filter.perPage,
                    search: state.filter.search
                };
                dispatch("ADMIN_DELETED_USER", data)
            })
        }
    }
}