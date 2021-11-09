import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router/index";
import { registerMicroApps, start } from "qiankun";

Vue.use(VueRouter);

/** 注册多个应用 */
const apps = [
  {
    name: "vueApp",
    entry: "//localhost:10000", //默认会加载这个html解析里面的js动态的执行（子应用必须支持跨域）,会fetch 请求
    container: "#vue", // 容器
    activeRule: "/vue", //激活路径
    props: { a: 1 }, // 通讯
  },
  {
    name: "reactApp",
    entry: "//localhost:20000", //默认会加载这个html解析里面的js动态的执行（子应用必须支持跨域）,会fetch 请求
    container: "#react",
    activeRule: "/react",
  },
];

/** 注册 */
registerMicroApps(apps, {
  // beforeLoad,
  // beforeUnmount,
  // beforeMount
  // ...
});
/** 开始 */
start({ prefetch: false });

new Vue({
  router: routes,
  render: (h) => h(App),
}).$mount("#app");
