import axios from "axios";
import login from "./login";
import registration from "./registration";

export default {
    state: {
        pos: [],
        carts: [],
        wishlist: [],
        loading: false,
        isProceed: false
    },

    mutations: {
        CARTS (state, payload) {
            state.carts = payload
        },

        CART_POS(state, payload) {
            state.pos = payload
        },

        CART_WHISHLIST (state, payload) {
            state.wishlist = payload
        },

        CART_LOADING (state, payload) {
            state.loading = payload
        },

        CART_IS_PROCEED (state, payload) {
            state.isProceed = payload
        },
    },

    actions: {
        CARTS({commit, dispatch}, {id}) {
            axios.get('/api/CART', {
                params: {
                    id
                }
            })
            .then((result) => {
                commit("CARTS", result.data.carts);
                commit("CART_WHISHLIST", result.data.wishlist);
                commit("CART_POS", result.data.pos);
                var data = {
                    carts: result.data.carts,
                    user_id: registration.state.form.id
                }
                dispatch("PRODUCT_CHECK_IF_AVAILABLE", data)
            })
        },

        CART_ADD({commit}, {user_id, item}) {
            commit("PRODUCT_ADDED_LOADING", true);
            commit("CART_LOADING", true);
            axios.post('/api/CART-ADD', {
                user_id, item
            })
            .then((result) => {
                commit("CARTS", result.data.carts);
                commit("CART_WHISHLIST", result.data.wishlist);
                commit("CART_POS", result.data.pos);
                commit("PRODUCT_ADDED_LOADING", false)
                commit("CART_LOADING", false);
            })
        },

        CART_UPDATE({commit}, {user_id, item, items, sale_id}) {
            commit("PRODUCT_ADDED_LOADING", true);
            commit("CART_LOADING", true);
            axios.post('/api/CART-UPDATE', {
                user_id, item, items, sale_id
            })
            .then((result) => {
                commit("SALE_M", result.data)
                commit("PRODUCT_ADDED_LOADING", false)
                commit("CART_LOADING", false);
            })
        },

        CART_UPDATE_USER({commit}, {user_id, carts, wishlist}) {
            axios.defaults.headers.common['Authorization'] = `Bearer ${login.state.token}`;

            axios.post('/api/CART-UPDATE-USER', {
                user_id, carts, wishlist
            })
            .then((result) => {
                commit("CARTS", result.data.carts);
                commit("CART_WHISHLIST", result.data.wishlist);
            })
        },

        CART_DELETE_BY_ID({commit}, {cartId, user_id}) {
            commit("CART_LOADING", true);
            axios.post('/api/CART-DELETE-BY-ID', {
                cartId, user_id
            })
            .then((result) => {
                commit("CARTS", result.data.carts);
                commit("CART_WHISHLIST", result.data.wishlist);
                commit("CART_LOADING", false);
            })
        },

        CART_DELETE_BY_ID_UPDATE({commit}, {cartId, user_id, sale_id, items}) {
            commit("CART_LOADING", true);
            axios.post('/api/CART-DELETE-BY-ID-UPDATE', {
                cartId, user_id, sale_id, items
            })
            .then((result) => {
                commit("SALE_M", result.data)
                commit("CART_LOADING", false);
            })
        },

        CART_IS({commit, dispatch}, {cartId, isCart, user_id}) {
            commit("CART_LOADING", true);
            axios.post('/api/CART-IS', {
                cartId, isCart, user_id
            })
            .then((result) => {
                commit("CARTS", result.data.carts);
                commit("CART_WHISHLIST", result.data.wishlist);
                commit("CART_LOADING", false);
                var data = {
                    carts: result.data.carts,
                    user_id
                }
                dispatch("PRODUCT_CHECK_IF_AVAILABLE", data)
            })
        },

        CART_UPDATE_QUANTITY({commit}, {cart}) {
            commit("CART_LOADING", true);
            axios.post("/api/CART-UPDATE-QUANTITY", {
                cart
            })
            .then((result) => {
                commit("CARTS", result.data.carts);
                commit("CART_WHISHLIST", result.data.wishlist);
                commit("CART_LOADING", false);
            })
        }
    }
}