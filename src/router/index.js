import { createWebHistory, createRouter } from "vue-router";
import HomePage from '@/components/home/HomePage.vue'
import SlotPage from '@/components/slot/SlotPage.vue'
import BindingPage from '@/components/binding/BindingPage.vue'
import PropsPage from '@/components/props/PropsPage.vue'

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
  {
    path: "/slot",
    name: "Slot",
    component: SlotPage,
  },
  {
    path: "/props",
    name: "Props",
    component: PropsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;