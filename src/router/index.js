import Vue from "vue";
import VueRouter from "vue-router";
import Download from "../views/Download.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Download",
    component: Download,
  },
  {
    path: "/download",
    name: "Download",
    component: Download,
  },
  {
    path: "/upload",
    name: "Upload",
    component: () => import("../views/Upload.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
