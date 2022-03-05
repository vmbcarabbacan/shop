import Vue from "vue";
import VueRouter from "vue-router";
import { routes } from "./etc/router/routes";
import goTo from "vuetify/es5/services/goto";
import store from "./store";

Vue.use(VueRouter);

const opts = {
    mode: "history",
    routes,
    scrollBehavior(to, from, savedPosition) {
        let scrollTo = 0;

        if (to.hash) {
            scrollTo = to.hash;
        } else if (savedPosition) {
            scrollTo = savedPosition.y;
        }

        return goTo(scrollTo);
    }
};

const router = new VueRouter(opts);

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (!store.state.login.token) {
            next({
                path: "/login"
            });
        } else {
            next();
        }
    } else if (to.matched.some(record => record.meta.requiresVisitor)) {
        if (store.state.login.token) {
            next({
                path: "/"
            });
        } else {
            next();
        }
    } else {
        next();
    }
});

export default router;
