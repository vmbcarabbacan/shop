import axios from "axios";
import router from "../../../router";

export default {
    state: {
        token: localStorage.getItem("ze-zle") || null,
        open: false,
        form: {
            emailAddress: null,
            password: null
        },
        loading: false,
        error: null
    },

    mutations: {
        LOGIN_FORM(state, payload) {
            state.form = payload
        },

        LOGIN_TOKEN(state, payload) {
            state.token = payload
        },

        LOGIN_OPEN(state, payload) {
            state.open = payload
        },

        LOGIN_LOADING(state, payload) {
            state.loading = payload
        },

        LOGIN_ERROR(state, payload) {
            state.error = payload
        },
    },

    actions: {
        LOGIN({commit, dispatch}, {email, password}) {
            return new Promise((res, rej) => {
                axios.post("/api/LOGIN", {
                    email, password
                })
                .then((result) => {
                    res(result)
                    commit("REGISTRATION_FORM", result.data.user)
                    commit("LOGIN_TOKEN", result.data.accessToken)
                    commit("CARTS", result.data.carts);
                    commit("CART_WHISHLIST", result.data.wishlist);
                    commit("CART_POS", result.data.pos);
                    localStorage.setItem(
                        "ze-zle",
                        result.data.accessToken
                    );
                    
                })
                .catch((err) => {
                    rej(err)
                    commit("LOGIN_ERROR", "Email and password do not match")
                })
            })
        },

        LOGIN_CHECK({commit, state, dispatch}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${state.token}`;

            axios.get("/api/LOGIN-CHECK")
            .then((result) => {
                commit("REGISTRATION_FORM", result.data)
                var id = {
                    id: result.data.id
                }
                dispatch("CARTS", id)
            })
            .catch((err) => {
                localStorage.removeItem("ze-zle")
                router.push({ name: "Login" })
            })
        },

        LOGOUT({commit}) {
            axios.get("/api/LOGOUT")
            .then((result) => {
                const form = {
                    id: 0,
                    location: "motor city",
                    children: [
                        {
                            id: 0,
                            firstName: null,
                            familyName: null,
                            gender: "Female",
                            nationality: null,
                            dateOfBirth: null,
                            dob_open: false,
                            isSelected: true
                        }
                    ],
                    mom: {
                        firstName: null,
                        familyName: null,
                        nationality: null,
                        mobileNumber: '',
                        homeNumber: '',
                        workNumber: '',
                        company: null,
                        emailAddress: null
                    },
                    dad: {
                        firstName: null,
                        familyName: null,
                        nationality: null,
                        mobileNumber: '',
                        homeNumber: '',
                        workNumber: '',
                        company: null,
                        emailAddress: null
                    },
                    address: {
                        id: 0,
                        address_1: null,
                        area: null,
                        building: null,
                        city: 'Dubai',
                        country: 'AE',
                        street: null,
                        zip: '00000',

                    },
                    role: "User",
                    password: null,
                    confirm_password: null
                };
                commit("LOGIN_TOKEN", null);
                commit("REGISTRATION_FORM", form);
                commit("CARTS", []);
                commit("CART_WHISHLIST", []);
                localStorage.removeItem("ze-zle");
                router.push({ name: "Login" })
            })
        }
    }
}