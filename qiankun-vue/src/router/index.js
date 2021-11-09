import VueRouter from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";

const routes = new VueRouter({
  mode: "history",
  base: "/vue",
  routes: [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/home", component: Home },
  ],
});

export default routes;
