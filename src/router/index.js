import { createRouter, createWebHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import MainLayout from "@/views/MainLayout.vue";
import HomePage from "@/views/HomePage";

const routes = [
  {
    path: "/:",
    name: "main-layout",
    component: MainLayout,
    children: [
      { path: "", name: "home-page", component: HomePage },
      { path: "/dashboard", name: "dashboard", component: Dashboard },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
