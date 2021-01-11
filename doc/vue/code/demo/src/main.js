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
      path: "/simpleForm",
      component: () => import("@/components/SimpleForm.vue"),
    },
    {
      path: "/dynamicTable",
      component: () => import("@/components/DynamicTable.vue"),
    },
    {
      path: "/calculator",
      component: () => import("@/components/Calculator.vue"),
    },
    {
      path: "/readFile",
      component: () => import("@/components/ReadFile.vue"),
    },
    {
      path:"/plateRecognition",
      component:()=>import("@/components/PlateRecognition.vue")
    }
  ],
  mode: "hash"
}
var router = new VueRouter(config);

new Vue({
  render: h => h(App),
  router //设置路由
}).$mount('#app')
