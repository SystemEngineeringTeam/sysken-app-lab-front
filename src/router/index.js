import Vue from "vue";
import Router from "vue-router";
import Lab from "@/pages/Lab";
import Login from "@/pages/Login";
import Users from "@/pages/Users";
import UserRegister from "@/pages/UserRegister";
import LabRegister from "@/pages/LabRegister";
import LabProfile from "@/pages/LabProfile";
import User from "@/pages/UserProfile"
import Universities from "@/pages/Universities";
import University from "@/pages/University";
import Home from "@/pages/Home"

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      // Home画面
      path: "/",
      name: "Home",
      component: Home
    },
    {
      // ラボ一覧画面
      path: "/labs",
      name: "Labs",
      component: Lab
    },
    {
      // ID番目のラボについて
      path: "/labs/:id",
      name: "LabProfile",
      component: LabProfile
    },
    {
      // ユーザーの人気,トレンド載せたい
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      // ID番目のユーザーについて
      path: "/users/:id",
      name: "User",
      component: User
    },
    {
      // ユーザー登録画面
      path: "/signup",
      name: "UserRegister",
      component: UserRegister
    },
    {
      // ログイン登録画面
      path: "/login",
      name: "Login",
      component: Login
    },
    {
      // 研究室登録画面
      path: "/lab/add",
      name: "LabRegister",
      component: LabRegister
    },
    {
      // 大学一覧画面
      path: "/university",
      name: "Universities",
      component: Universities
    },
    {
      // ID番目の大学について
      path: "/university/:id",
      name: "University",
      component: University
    }
  ]
});
