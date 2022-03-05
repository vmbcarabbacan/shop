import Vue from "vue";
import Vuex from "vuex";
import state from "./etc/store/state";
import mutations from "./etc/store/mutations";
import actions from "./etc/store/actions";
import address from "./etc/store/modules/address";
import admin from "./etc/store/modules/admin";
import cart from "./etc/store/modules/cart";
import categories from "./etc/store/modules/categories";
import checkout from "./etc/store/modules/checkout";
import dateRange from "./etc/store/modules/dateRange";
import enroll from "./etc/store/modules/enroll";
import image from "./etc/store/modules/image";
import location from "./etc/store/modules/location";
import login from "./etc/store/modules/login";
import pos from "./etc/store/modules/pos";
import product from "./etc/store/modules/product";
import registration from "./etc/store/modules/registration";
import reports from "./etc/store/modules/reports";
import request from "./etc/store/modules/request";
import resetPassword from "./etc/store/modules/resetPassword";
import sales from "./etc/store/modules/sales";
import sams from "./etc/store/modules/sams";
import schedule from "./etc/store/modules/schedule";
import setup from "./etc/store/modules/setup";
import studio from "./etc/store/modules/studio";
import weekday from "./etc/store/modules/weekday";
import xero from "./etc/store/modules/xero";

Vue.use(Vuex);

const opts = {
    modules: {
        address,
        admin,
        cart,
        categories,
        checkout,
        dateRange,
        enroll,
        image,
        location,
        login,
        pos,
        product,
        registration,
        reports,
        request,
        resetPassword,
        sales,
        sams,
        schedule,
        setup,
        studio,
        weekday,
        xero
    },
    state,
    mutations,
    actions
};

export default new Vuex.Store(opts);