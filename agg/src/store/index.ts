import { createStore } from "vuex";

export default createStore({
  state: {
    tab: "home",
  },
  mutations: {
    switchTab(state, payload) {
      state.tab = payload.target;
    },
  },
  actions: {},
  modules: {},
  strict: process.env.NODE_ENV !== "production",
});
