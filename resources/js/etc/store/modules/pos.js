import axios from "axios";
import login from "./login";

export default {

    state: {
        items: [],
        variants: [],
        users: [],
        isSearchSale: false,
        isRequestAmend: false,
        amendedId: 0,
        credits: 0
    },

    mutations: {
        POS_ITEMS(state, payload) {
            state.items = payload
        },

        POS_USERS(state, payload) {
            state.users = payload
        },

        POS_VAIRANTS(state, payload) {
            state.variants = payload
        },

        POS_ITEM_REMOVE(state) {
            state.items = []
        },

        POS_VAIRANT_REMOVE(state) {
            state.variants = []
        },

        POS_SEARCH_BY_SALE_ID(state) {
            state.isSearchSale = !state.isSearchSale
        },

        POS_REQUEST_AMEND_SALE(state) {
            state.isRequestAmend = !state.isRequestAmend
        },
        
        POS_AMENDED_ID(state, payload) {
            state.amendedId = payload
        },

        POST_CREDITS(state, payload) {
            state.credits = payload
        }
    },
    
    actions: {
        POS_ITEMS({commit}, {type}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/POS-ITEMS/${type}`)
            .then((result) => {
                commit("POS_ITEMS", result.data);
            })
        },

        POST_VARIANTS({commit}, {id, type}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/POS-VARIANTS/${id}/${type}`)
            .then((result) => {
                commit("POS_VAIRANTS", result.data)
            })
        },

        POS_SEARCH({commit}, {search}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("POS_ITEM_REMOVE", [])
            axios.get(`/api/POS-ITEMS-SEARCH/${search}`)
            .then((result) => {
                commit("POS_VAIRANT_REMOVE", [])
                commit("POS_ITEMS", result.data);
            })
        },

        POS_USERS({commit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/POS-USERS`)
            .then((result) => {
                commit("POS_USERS", result.data)
            })
        }
    }
}