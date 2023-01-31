<script setup>
import { RouterLink } from "vue-router";
</script>
<template>
  <div>
    <router-link active-class="active" to="/">Home</router-link>
    <router-link active-class="active" to="/about">About</router-link>
  </div>
</template>
<style scoped>
.active {
  color: white !important;
}
div {
  display: flex;
  gap: 20px;
  justify-content: center;
}
</style>
