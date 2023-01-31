<script setup>
import { ref } from "vue";
import cars from "../data/data.json";
</script>

<template>
  <div class="title">
    <h1>verschillende producten</h1>
  </div>
  <div class="cars">
    <routerLink :to="`/cars/${car.id}`" v-for="car in cars">
      {{ car.name }}
    </routerLink>
  </div>
</template>
<style>
.title {
  text-align: center;
  margin-bottom: 10px;
}
.cars {
  display: flex;
  justify-content: center;
  gap: 20px;
}
.cars a {
  background-color: rgba(253, 231, 231, 0.1);
  border-radius: 11px;
  padding: 10px;
}
</style>
