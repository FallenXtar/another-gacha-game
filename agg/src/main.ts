import { createApp } from "vue";
import App from "./App.vue";
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";
import store from "./store/index";

const app = createApp(App).use(store).use(ElementPlus);

app.mount("#app");
