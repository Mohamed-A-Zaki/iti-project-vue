import { createRouter, createWebHistory } from "vue-router";

import bodyComponent from "../components/bodyComponent.vue";
import cartComponent from "../components/cartComponent.vue";
import productDetails from "../components/productDetails.vue";
import electronicsComponent from "../components/electronicsComponent.vue";
import packagesComponent from "../components/packagesComponent.vue";
import fitnessComponent from "../components/fitnessComponent.vue";
import WFHEssentialsComponent from "../components/WFHEssentialsComponent.vue";

const routes = [
  { path: "/", component: bodyComponent },
  { path: "/cart", component: cartComponent },
  { path: "/:category/:id", component: productDetails, props: true },
  { path: "/electronics", component: electronicsComponent },
  { path: "/packages", component: packagesComponent },
  { path: "/fitness", component: fitnessComponent },
  { path: "/WFHEssentials", component: WFHEssentialsComponent },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
