export const auth = {
  state: {
    authState: false,
    authUser: {},
    accessToken: "",
  },
  getters: {},
  mutations: {
    SET_ACCESS_TOKEN: (state, payload) => {
      state.accessToken = payload;
    },
    SET_USER_DATA: (state, payload) => {
      state.authUser = payload;
    },
    TOGGLE_AUTH_STATE: (state, payload) => {
      state.authState = payload;
    },
    RESET_STATE: (state) => {
      state.authState = false;
      state.authUser = {};
      state.accessToken = "";
    },
  },
  actions: {
    setAccessToken: (context, payload) => {
      context.commit("SET_ACCESS_TOKEN", payload);
    },
    setUserData: (context, payload) => {
      context.commit("SET_USER_DATA", payload);
    },
    toggleAuthState: (context, payload) => {
      context.commit("TOGGLE_AUTH_STATE", payload);
    },
    resetState: (context) => {
      context.commit("RESET_STATE");
    },
  },
};
