import Vue from "vue";
import VueRouter from "vue-router";
import Vuex from "vuex";
import LandingPage from "./components/LandingPage-component";
import TopMenu from "./components/TopMenu-component";
import CreateAccount from "./components/CreateAccount";
import { store } from "./store";
import "./config";

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.component("top-menu", TopMenu);

const routes = [
    {
        path: "/",
        component: LandingPage,
        path: "/users/create",
        component: CreateAccount
    }
];

const router = new VueRouter({
    routes
});

const app = new Vue({
    router,
    el: "#app",
    store: new Vuex.Store(store)
});
