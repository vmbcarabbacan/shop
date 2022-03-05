import axios from "axios";
import login from "./login";

export default {
    state: {
        sales: {},
        sale: {
            mom: {},
            payment: [],
            item: [],
            total: {},
            address: null,
            notes: null,
            telr: null,
            pay: []
        },
        loading: false
    },

    mutations: {
        SALES_M(state, payload) {
            state.sales = payload
        },

        SALE_M(state, payload) {
            state.sale = payload
        },

        SALES_LOADING(state) {
            state.loading != state.loading
        },
    },

    actions: {
        SALES({commit}, {page, search, type, perPage}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("SALES_LOADING");
            return new Promise((res, rej) => {
                axios.get(`/api/SALES?page=${page}`, {
                    params: {
                        search,
                        type,
                        perPage
                    }
                })
                .then((result) => {
                    commit("SALES_LOADING")
                    commit("SALES_M", result.data)
                    res(result)
                })
                .catch((error) => {
                    rej(error)
                })
            })
        },

        SALE({commit}, {id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.get(`/api/SALE/${id}`)
                .then((result) => {
                    res(result.data)
                    commit("SALE_M", result.data)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        SALE_UPDATE({commit}, {id, status}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/SALE-UPDATE-TRANSACTION', {
                    id, status
                })
                .then((result) => {
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        SALE_UPDATE_TELR_TRANSACTION({}, {cart_id, status}) {
            return new Promise((res, rej) => {
                axios.post('/api/SALE-UPDATE-TELR-TRANSACTION', {
                    cart_id, status
                })
                .then((result) => {
                    res(result)
                })
            })
        },

        SALE_UPDATE_ONLINE_TRANSACTION({}, {transactionNumber, status}) {
            return new Promise((res, rej) => {
                axios.post('/api/SALE-UPDATE-ONLINE-TRANSACTION', {
                    transactionNumber, status
                })
                .then((result) => {
                    res(result)
                })
            })
        }

    }
}