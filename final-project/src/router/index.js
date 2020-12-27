import VueRouter from "vue-router";

import Home from "../views/Home";

const routes = [
  {
    name: "home",
    path: "/",
    component: Home,
  },
  {
    name: "404",
    path: "*",
    redirect: {
      name: "home",
    },
  },
];

const router = new VueRouter({
  routes,
  mode: "history",
});

export default router;
