import Vue from "vue";
import Router from "vue-router";
import Lab from "@/pages/Lab";
import Login from "@/pages/Login";
import User from "@/pages/User";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/lab",
      name: "Lab",
      component: Lab
    },
    {
      path: "/user",
      name: "User",
      component: User
    },
    {
      path: "/login",
      name: "Login",
      component: Login
    }
  ]
});
