import axios from "axios";
import login from "./login";

export default {
    state: {
        discounts: [],
    },

    mutations: {
        DISCOUNTS_M(state, payload) {
            state.discounts = payload
        }
    },

    actions: {
        DISCOUNTS({commit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get('/api/DISCOUNTS')
            .then((result) => {
                commit("DISCOUNTS_M", result.data);
            })
        },

        DISCOUNT_SAVE({dispatch}, {id, name, value}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/DISCOUNT-SAVE', {
                    id, name, value
                })
                .then((result) => {
                    dispatch("DISCOUNTS");
                    res(result)
                }).catch((err) => {
                    rej(err)
                })
            })
        }
    }
}