<script setup>
import { useRoute } from "vue-router";
import cars from "../data/data.json";

const route = useRoute();

const car = cars.find((c) => c.id === parseInt(route.params.id));
</script>

<template>
  <div>
    <h1>contact</h1>
    <p>{{ car.dealer.name }}</p>
    <p>{{ car.dealer.tel }}</p>
  </div>
</template>
