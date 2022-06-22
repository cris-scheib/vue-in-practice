<template>
  <layout>
    <div class="slot">
      <div class="center">
        <coffee-animation />
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from './layout/LayoutComponent.vue';
import CoffeeAnimation from './partials/CoffeeAnimation.vue';
export default {
  components: { Layout, CoffeeAnimation },
  name: "SlotCoffeePage",
  data() {
    return {
    };
  },
};
</script>