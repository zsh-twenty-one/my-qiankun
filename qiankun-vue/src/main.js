import Vue from "vue";
import App from "./App.vue";
import VueRouter from "vue-router";
import routes from "./router/index";

Vue.use(VueRouter);

let instance = null;
function render(props) {
  console.log(props);
  instance = new Vue({
    router: routes,
    render: (h) => h(App),
  }).$mount("#app"); // -这里是挂载到自己的html中 基座会拿到这个挂载后的html-将其插入进去
}

/** 使用webpack运行时的publicPath
 * giankun将会在微应用bootstrap之前注入一个运行时的publicPath变量
 */
if (window.__POWERED_BY_QIANKUN__) {
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
}

/** 如何独立运行微应用 */
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap(props) {
  console.log(props);
}
export async function mount(props) {
  render(props);
}
export async function unmount(props) {
  console.log(props);
  instance.$destroy();
}
