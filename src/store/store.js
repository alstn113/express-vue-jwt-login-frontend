import { createStore } from "vuex";
import { auth } from "./module/auth"; //로그인 모듈
import persistedstate from "vuex-persistedstate";

export const store = createStore({
  modules: {
    auth,
  },
  plugins: [
    persistedstate({
      paths: ["auth"],
    }),
  ],
});
