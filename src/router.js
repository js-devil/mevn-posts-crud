import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Create from './views/Create.vue';
import Index from './views/Index.vue';
import Edit from './views/Edit.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  hash: false,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/create",
      name: "create",
      component: Create
    },
    {
      path: "/posts",
      name: "index",
      component: Index
    },
    {
      path: "/edit",
      name: "edit",
      component: Edit
    },
    {
      path: "/404",
      name: "not-found",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/NotFound.vue")
    },
    { path: '*', redirect: '/404' },
  ]
});
