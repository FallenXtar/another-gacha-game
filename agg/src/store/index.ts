import { createStore } from "vuex";
import CryptoJS from "crypto-js";
export default createStore({
  state: {
    tab: "home",
    user: {
      name: "Aurthur",
      id: CryptoJS.MD5("Arthur").toString(),
      coin: 0,
      library: [
        {
          name: "Lo-Fi 猫",
          id: "lofi1",
          description: "A Lo-Fi Cat",
          img: "/img/v/lo-fi-1.jpg",
          type: "v",
          set: "unset",
        },
      ],
    },
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
