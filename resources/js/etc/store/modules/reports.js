import axios from "axios";
import login from "./login";

export default {
    state: {
        filters: {},
        locations: [],
        classInformations: [],
        studentsPerLessons: [],
        lessonByTerm: [],
        endOfDay: [],
        sales: [],
        saleDayofMonth: [],
        receipts: [],
        receiptByTerm: [],
        cancelled: [],
        discounts: []
    },

    mutations: {
        REPORT_FITLERS(state, payload) {
            state.filters = payload
        },

        REPORT_LOCATIONS(state, payload) {
            state.locations = payload
        },

        REPORT_CLASS_INFORMATION(state, payload) {
            state.classInformations = payload
        },

        REPORT_STUDENTS_PER_LESSONS(state, payload) {
            state.studentsPerLessons = payload
        },

        REPORT_END_OF_DAY(state, payload) {
            state.endOfDay = payload
        },

        REPORT_SALES(state, payload) {
            state.sales = payload
        },

        REPORT_SALE_DAY_OF_MONTH(state, payload) {
            state.saleDayofMonth = payload
        },

        REPORT_SALE_RECEIPTS(state, payload) {
            state.receipts = payload
        },
        
        REPORT_LESSON_BY_TERM(state, payload) {
            state.lessonByTerm = payload
        },
        
        REPORT_SALE_RECEIPT_BY_TERM(state, payload) {
            state.receiptByTerm = payload
        },
        
        REPORT_CANCELLED(state, payload) {
            state.cancelled = payload
        },

        REPORT_DISCOUNTS_M(state, payload) {
            state.discounts = payload
        }
    },

    actions: {
        REPORTS_GENERATE_FILTERS({commit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get('/api/REPORTS-ALL-FILTER')
            .then((result) => {
                commit("REPORT_FITLERS", result.data)
            })
        },

        REPORT_FILTER_LOCATION_BY_TERM_ID({commit}, {id}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post(`/api/REPORTS-LOCATION-BY-TERM-ID`, {
                id
            })
            .then((result) => {
                commit("REPORT_LOCATIONS", result.data)
            })
        },

        REPORT_FILTER_CLASS_INFORMATION({commit}, {dates, termIds, locationIds, lessonIds, teacherIds}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/REPORT-FILTER-CLASS-INFORMATION', {
                dates, termIds, locationIds, lessonIds, teacherIds
            })
            .then((result) => {
                commit("REPORT_CLASS_INFORMATION", result.data)
            })
        },

        REPORT_FILTER_STUDENTS_PER_LESSONS({commit}, {dates, termIds, locationIds, lessonIds, teacherIds}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/REPORT-FILTER-STUDENTS-PER-LESSONS', {
                dates, termIds, locationIds, lessonIds, teacherIds
            })
            .then((result => {
                commit("REPORT_STUDENTS_PER_LESSONS", result.data)
            }))
        },

        REPORT_FILTER_END_OF_DAY({commit}, {dates, receptionIds}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/REPORT-FILTER-END-OF-DAY', {
                    dates, receptionIds
                })
                .then((result) => {
                    res(result)
                    commit("REPORT_END_OF_DAY", result.data.endOfDay)
                    commit("REPORT_CANCELLED", result.data.cancelled)
                })
                .catch((error) => {
                    rej(err)
                })
            })
        },

        REPORT_FILTER_SALES({commit}, {dates, types}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/REPORT-FILTER-SALES', {
                    dates, types
                })
                .then((result) => {
                    res(result);
                    commit("REPORT_SALES", result.data);
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        REPORT_FILTER_DAY_OF_MONTH({commit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.get('/api/REPORT-FILTER-DAY-OF-MONTH')
            .then((result) => {
                commit("REPORT_SALE_DAY_OF_MONTH", result.data)
            })
        },

        REPORT_FILTER_LESSON_BY_TERM({commit}, {termIds, locationIds, lessonIds, teacherIds}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/REPORT-FILTER-LESSON-BY-TERM', {
                termIds, locationIds, lessonIds, teacherIds
            })
            .then((result) => {
                commit("REPORT_LESSON_BY_TERM", result.data)
            })
        },

        REPORT_STUDENT_ALL_PRODUCTS({commit}, {dates, allProdIds, studentIds, status}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.post('/api/REPORT-STUDENT-ALL-PRODUCTS',{
                    dates, allProdIds, studentIds, status
                })
                .then((result) => {
                    res(result)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        },

        REPORT_SALES_RECEIPTS({commit}, {dates, productId}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/REPORT-SALES-RECEIPTS', {
                dates, productId
            })
            .then((result) => {
                console.log(result.data)
                commit("REPORT_SALE_RECEIPTS", result.data)
            })
        },

        REPORT_SALES_RECEIPT_BY_TERM({commit}, {productId, termIds, locationIds, lessonIds, teacherIds}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/REPORT-SALES-RECEIPT-BY-TERM', {
                productId, termIds, locationIds, lessonIds, teacherIds
            })
            .then((result) => {
                commit("REPORT_SALE_RECEIPT_BY_TERM", result.data)
            })
        },

        REPORT_DISCOUNTS({commit}, {dates, discounts, status}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/REPORT-DISCOUNTS', {
                dates, discounts, status
            })
            .then((result) => {
                commit("REPORT_DISCOUNTS_M", result.data);
            })
        }
    }
}