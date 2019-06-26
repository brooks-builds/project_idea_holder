import Vue from "vue";
import VueRouter from "vue-router";
import LandingPage from "./components/LandingPageComponent";

const routes = [
    {
        path: "/",
        component: LandingPage
    }
];

const router = new VueRouter({ routes });

const app = new Vue({
    router
}).$mount("#app");
