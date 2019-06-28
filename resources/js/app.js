import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "./components/LandingPage-component";
import TopMenu from "./components/TopMenu-component";

Vue.use(VueRouter);

Vue.component("top-menu", TopMenu);

const routes = [{ path: "/", component: LandingPage }];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    el: "#app"
});
