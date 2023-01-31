import { createRouter, createWebHistory } from "vue-router";
import homeview from "../views/Home.vue";
import aboutview from "../views/About.vue";
import carview from "../views/Car.vue";
import contactview from "../views/Contact.vue";
import notfoundView from "../views/404.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: homeview,
    },
    {
      path: "/home",
      redirect: "/",
    },
    {
      path: "/about",
      name: "about",
      component: aboutview,
    },
    {
      path: "/cars/:id",
      name: "car",
      component: carview,
      children: [
        {
          path: "contact",
          component: contactview,
        },
      ],
    },
    {
      path: "/:catchall(.*)*",
      name: "not found",
      component: notfoundView,
    },
  ],
});

export default router;
