/**
 * router/index.js
 * included in `@/plugins/index.js`
 */

import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: () => import("@/layouts/Default.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/Index.vue"),
        },
      ],
    },
    /*
    {
      path: "/blog",
      component: () => import("@/layouts/Default.vue"),
      children: [
        {
          path: "",
          component: () => import("@/views/Index.vue"),
        },
        {
          path: "/:pathMatch(.*)*",
          redirect: "/",
        },
      ],
    },
    */
    {
      path: "/:pathMatch(.*)*",
      redirect: "/",
    },
  ],
});

export default router;
