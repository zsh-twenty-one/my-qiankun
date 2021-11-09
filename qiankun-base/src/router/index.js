import VueRouter from "vue-router";
const routes = new VueRouter({
  mode: "history",
  routes: [
      {path:'/',component:() =>import('../components/Home.vue')}
  ],
});

export default routes;
