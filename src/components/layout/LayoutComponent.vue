<template>
  <div class="h-100">
    <header>
      <nav class="navbar bg-dark">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Vue.js na prática</span>
        </div>
      </nav>
    </header>
    <sidebar-component />
    <main>
      <slot />
    </main>
    <footer>
      <footer-component />
    </footer>
  </div>
</template>

<script>
import FooterComponent from './FooterComponent.vue';
import SidebarComponent from './SidebarComponent.vue';
export default {
  components: { SidebarComponent, FooterComponent },
  name: "LayoutComponent",
  data() {
    return {
      name: "",
      collapsed: true,
      photo: null,
    };
  },
};
</script>
<style scoped>
.navbar {
  background: linear-gradient(315deg, #647eff 25%, #42d392);
  padding: 1em;
}

.navbar-brand,
.navbar-brand:hover {
  color: white;
  font-weight: bold;
}
</style>