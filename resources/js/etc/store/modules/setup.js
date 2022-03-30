import axios from "axios"
import login from "./login"

export default {
    state: {
        filters: {},
        filter: {
            vat: 0,
            emails: "[]",
            ebd: false,
            vat: 5,
            terms: null
        }
    },

    mutations: {
        SETUP_FILTERS_M(state, payload) {
            state.filters = payload
        },
        SETUP_FILTER_M(state, payload) {
            state.filter = payload
        },
    },

    actions: {
        SETUP_FILTER({commit}) {
            axios.defaults.headers.common['Authorization']  = `Bearer ${login.state.token}`;

            axios.get(`/api/SETUP-FILTERS`)
            .then((result) => {
                commit("SETUP_FILTERS_M", result.data)
            })
        },

        SETUP_LOAD_FILTER({commit}) {
            axios.get('/api/SETUP-LOAD-FILTER')
            .then((result) => {
                commit("SETUP_FILTER_M", result.data)
            })
        },

        SETUP_SAVE({commit}, {filter}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/SETUP-SAVE', {
                filter
            })
            .then((result) => {
                commit("SETUP_FILTER_M", result.data)
            })
        },

        SETUP_UPLOAD_USERS({}, {file}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            const config = {headers:{'Content-Type':'multipart/form-data'}}
            
            axios.post('/api/SETUP-UPLOAD-USER', {
                file
            })
            .then((result) => {
                console.log(result)
            })
        },

        SETUP_XERO_DETAILS_SAVE({commit}, {code, scope, session_state, state}){
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/SETUP-XERO-DETAILS-SAVE', {
                    code, scope, session_state, state
                })
                .then((result) => {
                    res(result)
                    commit("XERO_CREDENTIALS", result.data)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        }
    }
}