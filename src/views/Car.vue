<script setup>
import { useRoute, RouterView, useRouter } from "vue-router";
import cars from "../data/data.json";

// informatie over route
const route = useRoute();

// kan route veranderen
const router = useRouter();

const carId = parseInt(route.params.id);

const car = cars.find((c) => c.id === carId);

const contactFilter = () => {
  if (car.dealer.contact === false)
    return console.log("dealer doesn't want to show");
  return router.push(`/cars/${carId}/contact`);
};
</script>
<template>
  <div v-if="car">
    <p>{{ car.year }}</p>
    <h1>{{ car.name }}</h1>
    <h1>${{ car.price }}</h1>

    <button @click="contactFilter">View contact info</button>
  </div>
  <div v-else>
    <h1>Car not found</h1>
  </div>
  <routerView />
</template>
<style scoped>
div {
  margin-top: 30px;
}
</style>
