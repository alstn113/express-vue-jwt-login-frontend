import { createApp } from "vue";
import axios from "axios";
import App from "./App.vue";
import router from "./router";
import { store } from "./store/store";

axios.interceptors.request.use(
  (config) => {
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (err) => {
    if (err.response.status === 401) {
      store.dispatch("setAccessToken", null);
      router.push({
        name: "Login",
        params: { message: "세션이 만료되었습니다. 다시 로그인해주세요" },
      });
    }
    return Promise.reject(err);
  }
);

const app = createApp(App).use(router);
app.use(store);
app.mount("#app");
