<template>
  <div class="props">
    <div class="container pb-5">
      <customizer-card v-model:colors="colors" />
      <div class="row">
        <color-card v-for="color in colors" :key="color" :color="color" />
      </div>
    </div>
  </div>
</template>

<script>
import CustomizerCard from './partials/CustomizerCard.vue';
import ColorCard from './partials/ColorCard.vue';
export default {
  components: { CustomizerCard, ColorCard },
  name: "PropsPage",
  data() {
    return {
      colors: [
        '#647eff', '#42d392', '#42b883'
      ]
    };
  },
};
</script>

<style scoped>
.props {
  background-color: #213547;
  min-height: 100vh;
}
</style>
