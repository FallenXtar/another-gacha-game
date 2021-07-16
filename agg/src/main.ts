import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import store from "./store";

const app = createApp(App)
  .use(store)
  .component("AggHeader", {})
  .component("AggMenuBar", {})
  .use(ElementPlus)
  .mount("#app");
