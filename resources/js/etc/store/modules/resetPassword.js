import axios from "axios";
import router from "../../../router";

export default {
    state: {
        error: null,
        successMessage: null,
        errorCommit: null,
        successMessageCommit: null,
        loading: false,
        form: {
            password: null,
            confirmPassword: null
        }
    },

    mutations: {
        RESET_ERROR(state, payload) {
            state.error = payload
        },

        RESET_ERROR_COMMIT(state, payload) {
            state.errorCommit = payload
        },

        RESET_SUCCESS_MESSAGE(state, payload) {
            state.successMessage = payload
        },

        RESET_SUCCESS_MESSAGE_COMMIT(state, payload) {
            state.successMessageCommit = payload
        },

        RESET_LOADING(state, payload) {
            state.loading = payload
        },

        RESET_FORM(state, payload) {
            state.form = payload
        }
    },

    actions: {
        RESET_PASSWORD({commit}, {email}) {
            
            commit("RESET_LOADING", true)
            axios.post("/api/RESET-PASSWORD", {
                email
            })
            .then((result) => {
                commit("RESET_LOADING", false)
                commit("RESET_ERROR", null);
                commit("RESET_SUCCESS_MESSAGE", result.data)
            })
            .catch((err) => {
                commit("RESET_LOADING", false)
                commit("RESET_SUCCESS_MESSAGE", null)
                commit("RESET_ERROR", err.response.data)
            })
        },

        RESET_PASSWORD_CONFIRM({commit}, {id, token, password}) {

            commit("RESET_LOADING", true)
            axios.post("/api/RESET-PASSWORD-CONFIRM", {
                id, token, password
            })
            .then((result) => {
                const form = {
                    password: null,
                    confirmPassword: null
                }
                commit("RESET_LOADING", false)
                commit("RESET_FORM", form)
                commit("RESET_ERROR_COMMIT", null);
                commit("RESET_SUCCESS_MESSAGE_COMMIT", result.data)
                router.push({ name: "Login" })
            })
            .catch((err) => {
                commit("RESET_LOADING", false)
                commit("RESET_ERROR_COMMIT", err.response.data)
                commit("RESET_SUCCESS_MESSAGE_COMMIT", null)
            })
        }
    }
}