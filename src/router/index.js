import { createRouter, createWebHistory } from "vue-router";
import PivotTableDemo from "../views/PivotTableDemo.vue";

const routes = [
  { path: "/pivot-table-demo", component: PivotTableDemo },
  { path: "/:pathMatch(.*)*", redirect: "/pivot-table-demo" },
];

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
});
