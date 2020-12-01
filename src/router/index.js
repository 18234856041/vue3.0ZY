import { createRouter, createWebHashHistory } from "vue-router";
import store from "@/store/index";
import Home from "../views/Home/Home";
import Login from "../views/Login/Login";
const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/Home",
    name: "Home",
    component: Home,
    meta: {
      requireLogin: true, // 表示进入这个路由是需要登录的
      type: ["user","admin" ], // 表示只有管理员才能进入当前页面
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

// 权限
router.beforeEach((to, from, next) => {
  // 是否访问登录页
  if (to.name === "Login") {
    store.commit('setLoginFn',0)
    next();
  } else {
    //  用户是否登录
    if (to.meta.requireLogin && !store.state.isLogin) {
      next("/");
    }
    // 是否有权限
    else if (to.meta.type && to.meta.type.includes(store.state.userType)) {
      next();
    }
  }
});

export default router;
