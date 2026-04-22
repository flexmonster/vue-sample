<script setup>
import Header from "./components/Header.vue";
</script>

<template>
  <Header />
  <div class="wrap">
    <div class="demo-container">
      <RouterView />
    </div>
  </div>
</template>
