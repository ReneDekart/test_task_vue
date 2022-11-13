import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";
import "./styles/index.scss";

import * as Components from "@/components/";

const VueApp = createApp(App);
const pinia = createPinia();

Object.keys(Components).forEach((name) =>
  VueApp.component(name, Components[name])
);

VueApp.use(pinia);
VueApp.use(router).mount("#app");
