<template>
  {{ data.name }}
</template>

<script setup>
import axios from "axios";

const route = useRoute();

const entry = ref(route.params.entry);
const data = ref({});

const url = computed(() => {
  return `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${entry.value}`;
});

onMounted(() => {
  axios
    .get(url.value)
    .then((res) => {
      console.log(res.data.data);
      data.value = res.data.data;
    })
    .catch((err) => {
      console.error(err);
    });
});
</script>

<style scoped lang="scss"></style>
