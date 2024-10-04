import Vue from "vue";
import VueRouter from "vue-router";
import OrdersPage from "@/components/OrdersPage.vue";
import OrderPage from "@/components/OrderPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "OrderPage",
    component: OrdersPage,
  },
  {
    path: "/orders",
    name: "OrderPage",
    component: OrdersPage,
  },
  {
    path: "/orders/order/:id",
    name: "OrderPage",
    component: OrderPage,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
