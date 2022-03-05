import axios from "axios";
import login from "./login";
import product from "./product";
import sams from "./sams";

export default {
    state: {
        images: [],
        image: {},
        filter: {
            page: 1,
            perPage: 10
        },
        loading: false,
        isEdit: false,
        form: {},
        error: null,
        open: false
    },

    mutations: {

        IMAGES(state, payload) {
            state.images = payload
        },

        IMAGE(state, payload) {
            state.image = payload
        },

        IMAGE_FILTER(state, payload) {
            state.filter = payload
        },

        IMAGE_FORM(state, payload) {
            state.form = payload
        },

        IMAGE_EDIT(state, payload) {
            state.isEdit = payload
        },

        IMAGE_LOADING(state, payload) {
            state.loading = payload
        },

        IMAGE_ERROR(state, payload) {
            state.error = payload
        },

        IMAGE_OPEN(state, payload) {
            state.open = payload
        },

    },

    actions: {
        IMAGES({commit}, {perPage, page}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/IMAGES?page=${page}`, {
                params: {perPage}
            })
            .then((result) => {
                commit("IMAGE_LOADING", false);
                commit("IMAGES", result.data);
            })
        },

        IMAGE_UPDATE({commit, state, dispatch}, {alt, id, name, slug}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post("/api/IMAGE-UPDATE", {
                alt, id, name, slug
            })
            .then((result) => {
                commit("IMAGE_EDIT", false)
                commit("IMAGE_FORM", {})
                dispatch("IMAGES", state.filter)
                commit("IMAGE_ERROR", null)
            })
            .catch((err) => {
                commit("IMAGE_ERROR", err.response.data)
            })
        },

        IMAGE_SEARCH({commit}, {slug}) {
            axios.get(`/api/IMAGE-GALLERY/${slug}`)
            .then((result) => {
                commit("IMAGE", result.data)
            })
        },

        IMAGE_FILTER_BY_IDS({commit}, {ids}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post("/api/IMAGE-FILTER-BY-IDS", {
                ids
            })
            .then((result) => {
                product.state.product.images = result.data
                commit("PRODUCT", product.state.product)
            })
        },

        IMAGE_FILTER_BY_STUDENT_IDS({commit}, {ids}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post("/api/IMAGE-FILTER-BY-STUDENT-IDS", {
                ids
            })
            .then((result) => {
                sams.state.student.image = result.data
                commit("SAMS_STUDENT", sams.state.student)
            })
        }
    }
}