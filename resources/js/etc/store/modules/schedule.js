import axios from "axios";
import login from "./login";
import router from "../../../router";

export default {
    state: {
        schedules: {},
        schedule: {},
        loading: false,
        filter: {
            search: null,
            page: 1,
            perPage: 10
        },
        message: null,
        error: null,
        fromSchedule: [],
        toSchedule: [],
        copyStart: false,
        copyFinish: false,
        enrollment: {},
    },

    mutations: {
        SCHEDULES(state, payload) {
            state.schedules = payload
        },

        SCHEDULE(state, payload) {
            state.schedule = payload
        },

        SCHEDULE_ERROR(state, payload) {
            state.error = payload
        },

        SCHEDULE_MESSAGE(state, payload) {
            state.message = payload
        },

        SCHEDULE_FILTER(state, payload) {
            state.filter = payload
        },

        SCHEDULE_LOADING(state, payload) {
            state.loading = payload
        },

        SCHEDULE_FROM(state, payload) {
            state.fromSchedule = payload
        },

        SCHEDULE_TO(state, payload) {
            state.toSchedule = payload
        },

        SCHEDULE_COPY_START(state) {
            state.copyStart = !state.copyStart
        },

        SCHEDULE_COPY_FINISH(state) {
            state.copyFinish = !state.copyFinish
        },

        SCHEDULE_ENROLLMENT(state, payload) {
            state.enrollment = payload
        }

    },

    actions: {
        SCHEDULES({commit}, {page, search, type, perPage}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("SCHEDULE_LOADING", true);
            axios.get(`/api/SCHEDULES?page=${page}`, {
                params: {
                    search,
                    type,
                    perPage
                }
            })
            .then((result) => {
                commit("SCHEDULE_LOADING", false)
                commit("SCHEDULES", result.data)
            })
        },

        SCHEDULE_SAVE({commit}, {id, product_id, location_id, weekday_id, user_id, studio_id, time_start, time_end, price, limit, quantity, date_range_id, isVisible}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("SCHEDULE_LOADING", true)
            axios.post("/api/SCHEDULE-SAVE", {
                id, product_id, location_id, weekday_id, user_id, studio_id, time_start, time_end, price, limit, quantity, date_range_id, isVisible
            })
            .then((result) => {
                var data = {
                    id: 0,
                    product_id: 0,
                    location_id: 0,
                    weekday_id: 0,
                    user_id: 0,
                    studio_id: 0,
                    time_start: null,
                    time_end: null,
                    price: 0,
                    quantity: 0,
                    limit: 0,
                    date_range_id: null,
                    isVisible: true
                }
                commit("SCHEDULE_MESSAGE", result.data)
                commit("SCHEDULE_ERROR", null)
                setTimeout(() => {
                    if(id > 0) {
                        router.back()
                    };
                    commit("SCHEDULE", data)
                    commit("SCHEDULE_LOADING", false);
                    commit("SCHEDULE_MESSAGE", null);
                }, 3000);
            })
            .catch((err) => {
                commit("SCHEDULE_LOADING", false);
                commit("SCHEDULE_MESSAGE", null);
                commit("SCHEDULE_ERROR", err.response.data);
                setTimeout(() => {
                    commit("SCHEDULE_ERROR", null)
                }, 3000);
            })
        },

        SCHEDULE_GET_ALL_DETAILS({commit}, {id}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/SCHEDULE-GET-ALL-DETAILS/${id}`)
            .then((result) => {
                commit("LOCATION_ALL", result.data.locations);
                commit("STUDIO_ALL", result.data.studios);
                commit("PRODUCT_LESSON", result.data.lessons);
                commit("REGISTRATION_FORM_TEACHERS", result.data.teachers);
                commit("DATERANGE_ALL", result.data.dateranges);
            })
        },

        SCHEDULE_GET({commit, dispatch}, {id}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/SCHEDULE-GET/${id}`)
            .then((result) => {
                commit("SCHEDULE", result.data);
                dispatch("WEEKDAYS", {id: result.data.location_id});
                dispatch("SCHEDULE_GET_ALL_DETAILS", {id: result.data.location_id});
            })
        },

        SCHEDULE_GET_BY_DATERANGE({commit}, {dateRangeId, search, isFrom}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post('/api/SCHEDULE-GET-BY-DATERANGE', {
                dateRangeId, search
            })
            .then((result) => {
                commit(isFrom ? "SCHEDULE_FROM": "SCHEDULE_TO", result.data)
            })
        },

        SCHEDULE_COPY_SAVE({commit}, {schedules, toTermId}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("SCHEDULE_COPY_START")
            axios.post('/api/SCHEDULE-COPY-SAVE', {
                schedules, toTermId
            })
            .then((result) => {
                commit("SCHEDULE_COPY_START")
                commit("SCHEDULE_COPY_FINISH")
            })
        },

        SCHEDULE_DATES({commit}, {id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/SCHEDULE-GET-DATES/${id}`)
            .then((result) => {
                commit("SCHEDULE_ENROLLMENT", result.data);
                commit("SAMS_OPEN_ATTENDANCE");
            })
        }
    }
}