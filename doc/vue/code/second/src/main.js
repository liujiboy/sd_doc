import Vue from 'vue'
import App from './App.vue'
Vue.config.productionTip = false
//设置iview
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css';
Vue.use(ViewUI);
//设置vue-router
import VueRouter from "vue-router"
Vue.use(VueRouter);
var config = {
  routes: [
    {
      path: "/echarts1",
      component: () => import("@/components/Echarts1.vue"),
    },
    {
      path: "/echarts2",
      component: () => import("@/components/Echarts2.vue"),
    },
    {
      path: "/table",
      component: () => import("@/components/Table.vue"),
    }
  ],
  mode: "hash"
}
var router = new VueRouter(config);

new Vue({
  render: h => h(App),
  router //设置路由
}).$mount('#app')
