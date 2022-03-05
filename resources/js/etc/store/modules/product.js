import axios from "axios";
import login from './login';

export default {
    state: {
        products: {},
        product: {},
        productPd: {},
        lessonAll: [],
        success: null,
        error: null,
        loading: false,
        filter: {
            search: null,
            page: 1,
            perPage: 10
        },
        openUniforms: false,
        openLessons: false,
        addedLoading: false,
        search: [],
        home: {
            uniforms: [],
            lessons: [],
            camps: []
        },
        categories: [],
        webBySearch: {
            items: [],
            categories: []
        },
        typeUniforms: {
            items: [],
            categories: []
        },
        typeLessons: {
            items: [],
            categories: []
        },
        typeCamps: {
            items: [],
            categories: []
        },
        typeByAllCategory: [],
        export: []
    },

    mutations: {

        PRODUCTS(state, payload) {
            state.products = payload
        },

        PRODUCT(state, payload) {
            state.product = payload
        },

        PRODUCT_HOME(state, payload) {
            state.home = payload
        },

        PRODUCT_CATEGORIES(state, payload) {
            state.categories = payload
        },

        PRODUCT_LESSON(state, payload) {
            state.lessonAll = payload
        },

        PRODUCT_SUCCESS(state, payload) {
            state.success = payload
        },

        PRODUCT_ERROR(state, payload) {
            state.error = payload
        },

        PRODUCT_LOADING(state, payload) {
            state.loading = payload
        },

        PRODUCT_FILTER(state, payload) {
            state.filter = payload
        },

        PRODUCT_UNIFORM_OPEN(state, payload) {
            state.openUniforms = payload
        },

        PRODUCT_LESSON_OPEN(state, payload) {
            state.openLessons = payload
        },

        PRODUCT_DISPLAY(state, payload) {
            state.productPd = payload
        },

        PRODUCT_ADDED_LOADING(state, payload) {
            state.addedLoading = payload
        },

        PRODUCT_SEARCHING(state, payload) {
            state.search = payload
        },

        PRODUCT_BY_WEB_SEARCH(state, payload) {
            state.webBySearch = payload
        },

        PRODUCT_BY_TYPE_UNIFORMS(state, payload) {
            state.typeUniforms = payload
        },

        PRODUCT_BY_TYPE_LESSONS(state, payload) {
            state.typeLessons = payload
        },

        PRODUCT_BY_TYPE_CAMPS(state, payload) {
            state.typeCamps = payload
        },

        PRODUCT_BY_TYPE_BY_CATEGORY_ID(state, payload) {
            state.typeByAllCategory = payload
        },

        PRODUCT_EXPORT_M(state, payload) {
            state.export = payload
        }

    },

    actions: {
        PRODUCTS({commit}, {page, search, perPage, type}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/PRODUCTS?page=${page}`, {
                params: {
                    search,
                    type,
                    perPage
                }
            })
            .then((result) => {
                commit("PRODUCT_LOADING", false)
                commit("PRODUCTS", result.data)
            })
        },

        PRODUCT_SAVE({commit, dispatch}, {form}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("PRODUCT_LOADING", true)
            axios.post("/api/PRODUCT-STORE", {
                form
            })
            .then((result) => {
                var product = {
                    id: 0,
                    name: null,
                    body: null,
                    type: "Uniforms",
                    isVisible: 1,
                    soos: 0,
                    imageIds: [],
                    images: [],
                    categoryIds: [],
                    variants: [
                        {
                            id: 0,
                            name: null,
                            quantity: 0,
                            price: 0,
                            isVisible: 1
                        }
                    ],
                    relatedUniforms: [],
                    relatedUniformsValue: [],
                    relatedLessons: [],
                    relatedLessonsValue: [],
                    seo: {
                        keywords: null,
                        description: null
                    }
                }
                var type = {
                    type: 'Uniforms'
                };
                dispatch("CATEGORY_FILTER_BY_TYPE", type);
                commit("PRODUCT", product);
                commit("PRODUCT_LOADING", false);
                commit("PRODUCT_SUCCESS", result.data);
                
                setInterval(() => {
                    commit("PRODUCT_SUCCESS", null);
                    commit("PRODUCT_ERROR", null);
                }, 5000);
            })
            .catch((err) => {
                commit("PRODUCT_LOADING", false)
                commit("PRODUCT_ERROR", err.response.data)
                setInterval(() => {
                    commit("PRODUCT_SUCCESS", null)
                    commit("PRODUCT_ERROR", null)
                }, 5000);
            })
        },

        PRODUCT_FILTER_BY_SLUG({commit, dispatch}, {slug}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/PRODUCT-FILTER-BY-ID/${slug}`)
            .then((result) => {
                commit("PRODUCT", result.data)
                dispatch("CATEGORY_FILTER_BY_TYPE", {type: result.data.type})
            })
            .catch((err) => {
                commit("PRODUCT", {})
            })
        },

        PRODUCT_FILTER_BY_SLUG_AND_PDO({commit}, {slug, pdo}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.get(`/api/PRODUCT-FILTER-BY-SLUG-AND-PDO/${slug}/pdo/${pdo}`)
            .then((result) => {
                commit("PRODUCT_DISPLAY", result.data)
            })
            .catch((err) => {
                commit("PRODUCT_DISPLAY", {})
            })
        },

        PRODUCT_UPDATE({commit}, {form}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("PRODUCT_LOADING", true)
            return new Promise((res, rej) => {
                axios.post("/api/PRODUCT-UPDATE", {
                    form
                })
                .then((result) => {
                    commit("PRODUCT_SUCCESS", result.data)
                    commit("PRODUCT_LOADING", false)
                    setInterval(() => {
                        commit("PRODUCT_SUCCESS", null)
                        commit("PRODUCT_ERROR", null)
                        res(result)
                    }, 5000);
                })
                .catch((err) => {
                    commit("PRODUCT_ERROR", err.response.data)
                    commit("PRODUCT_LOADING", false)
                    setInterval(() => {
                        commit("PRODUCT_SUCCESS", null)
                        commit("PRODUCT_ERROR", null)
                        rej(err)
                    }, 5000);
                })
            })
        },

        PRODUCT_COPY({commit}, {form}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            commit("PRODUCT_LOADING", true)
            return new Promise((res, rej) => {
                axios.post("/api/PRODUCT-COPY", {
                    form
                })
                .then((result) => {
                    commit("PRODUCT_SUCCESS", result.data)
                    commit("PRODUCT_LOADING", false)
                    setInterval(() => {
                        commit("PRODUCT_SUCCESS", null)
                        commit("PRODUCT_ERROR", null)
                        res(result)
                    }, 5000);
                })
                .catch((err) => {
                    commit("PRODUCT_ERROR", err.response.data)
                    commit("PRODUCT_LOADING", false)
                    setInterval(() => {
                        commit("PRODUCT_SUCCESS", null)
                        commit("PRODUCT_ERROR", null)
                        rej(err)
                    }, 5000);
                })
            })
        },

        PRODUCT_RELATED_UNIFORMS_FILTER_BY_IDS({commit, state}, {ids}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post("/api/PRODUCT-RELATED-UNIFORMS-FILTER-BY-IDS", {
                ids
            })
            .then((result) => {
                state.product.relatedUniformsValue = result.data
                commit("PRODUCT", state.product)
            })
        },

        PRODUCT_RELATED_LESSONS_FILTER_BY_IDS({commit, state}, {ids}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post("/api/PRODUCT-RELATED-LESSONS-FILTER-BY-IDS", {
                ids
            })
            .then((result) => {
                state.product.relatedLessonsValue = result.data
                commit("PRODUCT", state.product)
            })
        },

        PRODUCT_CHECK_IF_AVAILABLE({commit}, {carts, user_id}) {
            commit("CART_LOADING", true);
            axios.post("/api/PRODUCT-CHECK-IF-AVAILABLE", {
                carts, user_id
            })
            .then((result) => {
                commit("CARTS", result.data.carts);
                commit("CART_WHISHLIST", result.data.wishlist);
                commit("CART_LOADING", false);
            })
        },

        PRODUCT_SEARCH({commit}, {search}) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${login.state.token}`;

            axios.post("/api/PRODUCT-SEARCH", {
                search
            })
            .then((result) => {
                commit("PRODUCT_SEARCHING", result.data)
                setTimeout(() => {
                    commit("PRODUCT_SEARCHING", [])
                }, 5000);
            })
        },

        PRODUCT_CHANGE_VISIBLE({}, {item}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/PRODUCT-CHANGE-VISIBLE', {
                item
            })
        },
        
        PRODUCT_HOME({commit}) {
            axios.get("/api/PRODUCT-HOME")
            .then((result) => {
                commit('PRODUCT_HOME', result.data)
            })
        },

        PRODUCT_CATEGORIES({commit}) {
            axios.get("/api/PRODUCT-CATEGORIES")
            .then((result) => {
                commit('PRODUCT_CATEGORIES', result.data)
            })
        },

        PRODUCT_BY_WEB_SEARCH({commit}, {search, filter, page, perPage}) {
            axios.get(`/api/PRODUCT-WEB-SEARCH?page=${page}`, {
                params: {search, perPage, filter}
            })
            .then((result) => {
                commit("PRODUCT_BY_WEB_SEARCH", result.data)
            })
        },

        PRODUCT_BY_TYPE_UNIFORMS({commit}, {type, filter, page, perPage}) {
            axios.get(`/api/PRODUCT-TYPE-UNIFORMS?page=${page}`, {
                params: {type, perPage, filter}
            })
            .then((result) => {
                commit("PRODUCT_BY_TYPE_UNIFORMS", result.data)
            })
        },

        PRODUCT_BY_TYPE_LESSONS({commit}, {type, filter, page, perPage}) {
            axios.get(`/api/PRODUCT-TYPE-LESSONS?page=${page}`, {
                params: {type, perPage, filter}
            })
            .then((result) => {
                commit("PRODUCT_BY_TYPE_LESSONS", result.data)
            })
        },

        PRODUCT_BY_TYPE_CAMPS({commit}, {type, filter, page, perPage}) {
            axios.get(`/api/PRODUCT-TYPE-CAMPS?page=${page}`, {
                params: {type, perPage, filter}
            })
            .then((result) => {
                commit("PRODUCT_BY_TYPE_CAMPS", result.data)
            })
        },

        PRODUCT_BY_TYPE_BY_CATEGORY_ID({commit}, {type, id, page, perPage}) {
            axios.get(`/api/PRODUCT-TYPE-BY-CATEGORY-ID?page=${page}`, {
                params: {type, perPage, id}
            })
            .then((result) => {
                commit("PRODUCT_BY_TYPE_BY_CATEGORY_ID", result.data)
            })
        },

        PRODUCT_EXPORT_UNIFORMS({commit}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            return new Promise((res, rej) => {
                axios.get('/api/PRODUCT-UNIFORM-EXPORT')
                .then((result) => {
                    res(result)
                    commit("PRODUCT_EXPORT_M", result.data)
                })
                .catch((err) => {
                    rej(err)
                })
            })
        }
    }
}