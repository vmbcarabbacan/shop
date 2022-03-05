import axios from "axios";
import login from "./login";

export default {
    state: {
        telr: null,
        transactionNumber: null
    },

    mutations: {
        CHECKOUT_TELR(state, payload) {
            state.telr = payload;
        },

        CHECKOUT_TRANSACTION_NUMBER(state, payload) {
            state.transactionNumber = payload
        }
    },

    actions: {
        CHECKOUT_PAYMENT({commit}, {item, payment, total, notes, mom, address, link, isCredit, credit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/CHECKOUT-PAYMENT-POS', {
                    item, address, total, mom, payment, link, notes, isCredit, credit
                })
                .then((result) => {
                    // console.log(result.data)
                    res(result)
                    commit("CARTS", result.data.carts);
                    commit("CART_WHISHLIST", result.data.wishlist);
                    commit("CART_POS", result.data.pos);
                    commit("CHECKOUT_TELR", result.data.telr);
                    commit("CHECKOUT_TRANSACTION_NUMBER", result.data.transactionNumber)
                })
                .catch((err) => {
                    rej(err)
                })
            })

        },

        CHECKOUT_PAYMENT_UPDATE({commit}, {id, item, payment, total, notes, mom, address, link}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/CHECKOUT-PAYMENT-POS-UPDATE', {
                    id, item, address, total, mom, payment, link, notes
                })
                .then((result) => {
                    res(result)
                    commit("SALE_M", result.data)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        CHECKOUT_PAYMENT_ONLINE({commit}, {item, payment, total, notes, mom, address, isCredit, credit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/CHECKOUT-PAYMENT-ONLINE', {
                    item, payment, total, notes, mom, address, isCredit, credit
                })
                .then((result) => {
                    commit("CHECKOUT_TELR", result.data.telr);
                    commit("CHECKOUT_TRANSACTION_NUMBER", result.data.transactionNumber)
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        }
    }
}