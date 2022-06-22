<template>
  <layout>
    <div class="slot">
      <div class="center">
        <desk-animation />
      </div>
    </div>
  </layout>
</template>

<script>
import Layout from './layout/LayoutComponent.vue';
import DeskAnimation from './partials/DeskAnimation.vue';
export default {
  components: { Layout, DeskAnimation },
  name: "SlotDeskPage",
  data() {
    return {
    };
  },
};
</script>
