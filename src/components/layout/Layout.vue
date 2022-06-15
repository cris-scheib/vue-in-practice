<template>
  <div class="h-100">
    <main>
      <header></header>
      <div class="slot">
        <slot />
      </div>
      <footer></footer>
    </main>
  </div>
</template>

<script>
export default {
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
</style>