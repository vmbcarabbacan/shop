import axios from "axios";
import router from "../../../router";
import login from "./login";

export default {

    state: {
        current: [],
        done: [],
    },

    mutations: {
        ENROLLMENT_CURRENT(state, payload) {
            state.current = payload
        },

        ENROLLMENT_DONE(state, payload) {
            state.done = payload
        }
    },

    actions: {
        ENROLLMENT({commit}, {id, schedules}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post("/api/ENROLLMENT", {
                id, schedules
            })
            .then((result) => {
                router.push({name: 'StudentModal', params: {id}})
            })
            .catch((err) => {

            })
        },

        ENROLLMENT_GET({commit}, {id, is_end}) {
            axios.defaults.headers.common['Authotization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/ENROLLMENT/${id}/is_end/${is_end}`)
            .then((result) => {

                if(is_end){
                    commit("ENROLLMENT_DONE", result.data);
                }
                else {
                    commit("ENROLLMENT_CURRENT", result.data);
                }
            })
        },

        ENROLLMENT_DELETE({dispatch}, {id, student_id}) {
            axios.defaults.headers.common['Authotization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/ENROLLMENT-DELETE/${id}`)
            .then((result) => {
                dispatch("ENROLLMENT_GET", {id: student_id, is_end: 0});
            })
        },

        ENROLLMENT_CHANGE_TO_PERMANENT({dispatch}, {id, student_id}) {
            axios.defaults.headers.common['Authotization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/ENROLLMENT-PERMANENT/${id}`)
            .then((result) => {
                dispatch("ENROLLMENT_GET", {id: student_id, is_end: 0});
            })
        }
    }
}