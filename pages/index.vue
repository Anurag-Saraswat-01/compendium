<template>
  <h1>Compendium</h1>
  <ul>
    <li v-for="category in categories">
      <NuxtLink :to="`/category/${category.toLowerCase()}`">{{
        category
      }}</NuxtLink>
    </li>
  </ul>
</template>

<script setup>
const categories = ref([
  "Creatures",
  "Equipment",
  "Materials",
  "Monsters",
  "Treasure",
]);
</script>

<style scoped lang="scss"></style>
