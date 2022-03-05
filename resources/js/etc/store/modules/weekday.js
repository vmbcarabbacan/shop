import axios from "axios"
import login from "./login"

export default {
    state: {
        days: []
    },

    mutations: {
        WEEKDAYS(state, payload) {
            state.days = payload
        }
    },

    actions: {
        WEEKDAYS({commit}, {id}) {
            axios.defaults.headers.common['Authorization']  = `Bearer ${login.state.token}`;

            axios.get(`/api/WEEKDAYS/${id}`)
            .then((result) => {
                commit("WEEKDAYS", result.data)
            })
        }
    }
}