import axios from "axios";
import login from "./login";

export default {
    state: {
        schedules: [],
        studSchedules: [],
        parents: {},
        teachers: {},
        students: {},
        student: {},
        loading: false,
        parentFilter: {
            page: 1,
            perPage: 20,
            search: null,
            role: 'User'
        },
        studentFilter: {
            page: 1,
            perPage: 20,
            search: null
        },
        form: {},
        error: null,
        isNew: false,
        isEdit: false,
        studentMessage: null,
        studentByParentId: [],
        openAttendance: false,
        credits: null
    },

    mutations: {
        SAMS_LOADING(state, payload) {
            state.loading = payload
        },

        SAMS_PARENT_EDIT(state, payload) {
            state.isEdit = payload
        },

        SAMS_FORM(state, payload) {
            state.form = payload
        },

        SAMS_ERROR(state, payload) {
            state.error = payload
        },

        SAMS_NEW_EMAIL(state, payload) {
            state.isNew = payload
        },

        SAMS_PARENT_FILTER(state, payload) {
            state.parentFilter = payload
        },

        SAMS_STUDENT_FILTER(state, payload) {
            state.studentFilter = payload
        },

        SAMS_SCHEDULES(state, payload) {
            state.schedules = payload
        },

        SAMS_PARENTS(state, payload) {
            state.parents = payload
        },

        SAMS_TEACHERS(state, payload) {
            state.teachers = payload
        },

        SAMS_STUDENTS(state, payload) {
            state.students = payload
        },

        SAMS_STUDENT(state, payload) {
            state.student = payload
        },

        SAMS_STUDENT_BY_PARENT_ID(state, payload) {
            state.studentByParentId = payload
        },

        SAMS_STUDENT_MESSAGE(state, payload) {
            state.studentMessage = payload
        },

        SAMS_OPEN_ATTENDANCE(state) {
            state.openAttendance = !state.openAttendance
        },

        SAMS_STUDENT_SCHEDULES(state, payload) {
            state.studSchedules = payload
        },

        SAMS_PARENT_CREDITS(state, payload) {
            state.credits = payload
        }
    },

    actions: {
        SAMS_SCHEDULES({commit}, {location_id, date_range_id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/SAMS-SCHEDULE', {
                location_id, date_range_id
            })
            .then((result) => {
                commit("SAMS_SCHEDULES", result.data)
            })
        },

        SAMS_VERIFY_EMAIL({commit}, {email}) {

            return new Promise((res, rej) => {
                axios.post("/api/CHECK-EMAIL", {
                    email
                })
                .then((result) => {
                    commit("SAMS_FORM", result.data)
                    commit("SAMS_ERROR", null);
                    commit("SAMS_NEW_EMAIL", false);
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                    commit("SAMS_ERROR", err.response.data.errors.email[0]);
                    commit("SAMS_NEW_EMAIL", err.response.status === 421 ? true : false);
                })
            })
        },


        SAMS_PARENTS({commit}, {page, search, role, filter, perPage}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;
            commit("SAMS_LOADING", true);
            axios.get(`/api/SAMS-USERS/${role}?page=${page}`, {
                params: {
                    search, perPage, filter
                }
            })
            .then((result) => {
                role == 'User' 
                    ? commit("SAMS_PARENTS", result.data) 
                    : commit("SAMS_TEACHERS", result.data);

                commit("SAMS_LOADING", false);

            })
        },

        SAMS_PARENT_DELETE({dispatch, state}, {id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post("/api/SAMS-PARENT-DELETE", {
                id
            })
            .then((result) => {
                var filter = {
                    page: state.parentFilter.page,
                    search: state.parentFilter.search,
                    role: state.parentFilter.role,
                    perPage: state.parentFilter.perPage
                }
                dispatch("SAMS_PARENTS", filter)
                
            })
        },

        SAMS_STUDENTS({commit}, {page, perPage, search}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            commit("SAMS_LOADING", true);
            axios.get(`/api/SAMS-STUDENTS?page=${page}`, {
                params: {
                    perPage, search
                }
            })
            .then((result) => {
                commit("SAMS_STUDENTS", result.data)
                commit("SAMS_LOADING", false);
            })

        },

        SAMS_STUDENT({commit}, {id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get(`/api/SAMS-STUDENT/${id}`)
            .then((result) => {
                commit("SAMS_STUDENT", result.data)
            })
        },

        SAMS_STUDENT_BY_PARENT_ID({commit}, {id}) {
            axios.defaults.headers.common['Authoriaztion'] = `Bearer ${login.state.token}`;

            axios.get(`/api/SAMS-STUDENT-BY-PARENT-ID/${id}`)
            .then((result) => {
                commit("POST_CREDITS", parseInt(result.data.credits.meta_value))
                commit("SAMS_STUDENT_BY_PARENT_ID", result.data.children)
            })
        },

        SAMS_STUDENT_STORE({commit}, {form}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post("/api/SAMS-STUDENT-STORE", {
                form
            })
            .then((result) => {
                commit("SAMS_STUDENT_MESSAGE", result.data)
                setTimeout(() => {
                    commit("SAMS_STUDENT_MESSAGE", null)
                }, 5000);
            })
        },

        SAMS_UPDATE_ATTENDANCE({commit}, {attendance, notes, schedule_id, date}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/SAMS-UPDATE-ATTENDANCE', {
                    attendance, notes, schedule_id, date
                })
                .then((result) => {
                    res(result)
                    commit("SAMS_OPEN_ATTENDANCE")
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        SAMS_GET_STUDENT_SCHEDULES({commit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get('/api/SAMS-GET-STUDENT-SCHEDULES')
            .then((result) => {
                commit("SAMS_STUDENT_SCHEDULES", result.data)
            })
        },
        
        SAMS_GET_PARENT_CREDITS({commit}, {id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.get(`/api/SAMS-PARENT-CREDITS/${id}`)
                .then((result) => {
                    res(result)
                    commit("SAMS_PARENT_CREDITS", result.data)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        SAMS_UPDATE_PARENT_CREDITS({commit}, {id, value}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/SAMS-UPDATE-PARENT-CREDITS', {
                    id, value
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