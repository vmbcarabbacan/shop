// require('./bootstrap');

import Vue from 'vue';
import vuetify from './vuetify';
import store from './store';
import router from "./router";
import moment from "moment";
import accounting from "accounting-js";
import { mapActions, mapState } from "vuex";
import VueMeta from 'vue-meta';
import VueQuillEditor from './quil';
import { get_age, excel, print, printReceipt } from './etc/filter/other';
import VueApexCharts from 'vue-apexcharts'


Vue.filter("currency", function(money) {
    return accounting.formatMoney(money, { symbol: "AED", format: "%v %s" });
});

Vue.filter("date", function(value) {
    return moment(value).format("MMMM DD YYYY");
});

Vue.filter("time", function(value) {
    return moment('1992-03-15 ' + value).format("h:mm a");
});

Vue.filter("dateAndTime", function(value) {
    return moment(value).format("MMMM DD YYYY, h:mm a");
});

Vue.filter('toUpper', function(value) {

    if(value) {
        var splitStr = value.toLowerCase().split(' ');
        for (var i = 0; i < splitStr.length; i++) {
            splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
        }
    return splitStr.join(' ');
    }
});

Vue.prototype.$print = print;
Vue.prototype.$excel = excel;
Vue.prototype.$age = get_age;
Vue.prototype.$receipt = printReceipt;

Vue.use(VueMeta);
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)

Vue.component("Skeleton", require("./components/Skeleton.vue").default);

new Vue({
    el: "#app",
    vuetify,
    store,
    router,
    VueQuillEditor,

    created() {
        this.CHECKER();
        this.PRODUCT_HOME();
        this.PRODUCT_CATEGORIES();
        this.SETUP_LOAD_FILTER();
        this.FORM_ACTIVE();
        this.REQUEST_COUNT();
    },
    
    methods: {
        ...mapActions(["LOGIN_CHECK", "CARTS", "PRODUCT_HOME", "PRODUCT_CATEGORIES", "SETUP_LOAD_FILTER", "REQUEST_COUNT", "FORM_ACTIVE"]),

        CHECKER() {
            if(this.login.token) {
                this.LOGIN_CHECK();
            } else {
                var id = {
                    id: 0
                }
                this.CARTS(id);
            }
        }
    },

    computed: {
        ...mapState(["login"])
    }
})