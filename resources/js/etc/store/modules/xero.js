import axios from "axios";
import login from './login';

export default {
    state: {
        xero:{},
        items: [],
        charts: []
    },

    mutations: {
        XERO_CREDENTIALS(state, payload) {
            state.xero = payload
        },

        XERO_ITEMS(state, payload) {
            state.items = payload
        },

        XERO_CHART_OF_ACCOUNT(state, payload) {
            state.charts = payload
        }
    },


    actions: {
        XERO_LOGIN() {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.get('/api/XERO-LOGIN')
                .then((result) => {
                    res(result);
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        XERO_GET({commit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get('/api/XERO-GET')
            .then((result) => {
                commit("XERO_CREDENTIALS", result.data)
            })
        },

        XERO_REFRESH_TOKEN({commit}, {token}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/XERO-REFRESH-TOKEN', {
                    token
                })
                .then((result) => {
                    commit("XERO_CREDENTIALS", result.data)
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        XERO_FILTER_RECORD({commit}, {dates}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/XERO-FILTER', {
                    dates
                })
                .then((result) => {
                    commit("XERO_ITEMS", result.data)
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        XERO_IMPORT({}, {accessToken, tenantId, items}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/XERO-IMPORT', {
                    accessToken, tenantId, items
                })
                .then((result) => {
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        XERO_LOAD_INVOICES({}, {accessToken, tenantId}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/XERO-LOAD-INVOICE', {
                accessToken, tenantId
            })
            .then((result) => {
                console.log(result.data)
            })
        },

        XERO_GET_CHART_OF_ACCOUNT({commit}, {type}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/XERO-GET-CHART-OF-ACCOUNT/${type}`)
            .then((result) => {
                commit("XERO_CHART_OF_ACCOUNT", result.data)
            })
        },

        XERO_GET_CODE({}, {id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.get(`/api/XERO-GET-CODE/${id}`)
                .then((result) => {
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        XERO_SAVE({}, {product_id, chart_of_account_id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/XERO-SAVE', {
                    product_id, chart_of_account_id
                })
                .then((result) => {
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        }
    }
}