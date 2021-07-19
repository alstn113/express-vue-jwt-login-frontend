import { createRouter, createWebHistory } from "vue-router";
import { checkUserData } from "../../helpers/user";
import { store } from "../store/store";
// import _ from "lodash";
// import { store } from "../../src/store/store";

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/components/auth/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("@/components/auth/Register.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/views/About.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/error/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, from, next) => {
  await checkUserData();
  if (to.name !== "Login" && to.meta.requiresAuth) {
    if (store.state.auth.accessToken) {
      next();
    } else {
      store.dispatch("resetState");
      next({ name: "Login" });
    }
  } else {
    next();
  }
});

export default router;
