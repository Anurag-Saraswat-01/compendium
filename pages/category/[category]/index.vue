<template>
  <h1 class="page-title">Category: {{ category }}</h1>
  <div class="card-grid">
    <Card v-for="entry in entries" :category="category" :entry="entry" />
  </div>
</template>

<script setup>
import axios from "axios";
const route = useRoute();
const category = ref(route.params.category);
const entries = ref([]);

const url = computed(() => {
  return `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category.value}`;
});

onMounted(() =>
  axios
    .get(url.value)
    .then((res) => {
      console.dir(res.data.data);
      entries.value = res.data.data.sort((a, b) => a.id - b.id);
    })
    .catch((err) => {
      console.error(err);
    })
);
</script>

<style scoped lang="scss">
.page-title {
  margin-bottom: 1rem;
}

.card-grid {
  display: grid;
  grid-template-columns: repeat(2, auto);
  gap: 1rem;
}
</style>
