import axios from "axios";
import login from "./login";

export default {
    state: {
        loading: false,
        message: null
    },

    mutations: {
        ADDRESS_LOADING(state, payload) {
            state.loading = payload
        },

        ADDRESS_MESSAGE(state, payload) {
            state.message = payload
        }
    },

    actions: {
        ADDRESS_SAVE({commit}, {address}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("ADDRESS_LOADING", true)
            axios.post('/api/ADDRESS-SAVE', {
                address
            })
            .then((result) => {
                commit("REGISTRATION_FORM", result.data);
                commit("ADDRESS_MESSAGE", "Address saved!");
                commit("ADDRESS_LOADING", false);

                setInterval(() => {
                    commit("ADDRESS_MESSAGE", null);
                }, 5000);
            }) 
        }
    }
}