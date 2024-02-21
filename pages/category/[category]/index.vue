<template>
  <h1>Category: {{ category }}</h1>
  <ul>
    <li v-for="entry in entries">
      <NuxtLink :to="entryLink(entry)">
        {{ entry.name }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script setup>
import axios from "axios";
const route = useRoute();
const category = ref(route.params.category);
const entries = ref([]);

const url = computed(() => {
  return `https://botw-compendium.herokuapp.com/api/v3/compendium/category/${category.value}`;
});

const entryLink = (entry) => {
  return `/${category.value.toLowerCase()}/${entry.name.replaceAll(" ", "_")}`;
};

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

<style scoped lang="scss"></style>
