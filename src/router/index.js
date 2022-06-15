import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/components/pages/HomePage.vue'
import BindingPage from '@/components/pages/BindingPage.vue'

require('@/assets/css/custom.css');

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/binding",
    name: "Binding",
    component: BindingPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;