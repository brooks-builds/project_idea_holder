import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "./components/LandingPage-component";
import TopMenu from "./components/TopMenu-component";
import CreateAccount from "./components/CreateAccount";
import "./config";

Vue.use(VueRouter);

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
    el: "#app"
});
