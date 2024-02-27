<template>
  <div v-if="data">
    <h1>{{ data.name }}</h1>
    <img :src="data.image" :alt="data.name" loading="lazy" />
    <div>
      <span>Category: </span
      ><NuxtLink :to="categoryLink(data.category)">{{
        data.category
      }}</NuxtLink>
    </div>
    <div>"{{ data.description }}"</div>
    <div>
      <span>Common Locations: </span>
      <span v-if="hasCommonLocations" v-for="location in data.common_locations">
        {{ location }}
      </span>
      <span v-else>-</span>
    </div>
    <div v-if="isCreature || isTreasure">
      <span>Drops: </span>
      <span v-if="hasDrops" v-for="drop in data.drops">{{ drop }}</span>
      <span v-else>-</span>
    </div>
    <div v-if="isCreature"><span>Edible: </span>{{ data.edible }}</div>
    <div v-if="isEquipment">
      <div><span>Attack: </span>{{ data.properties.attack }}</div>
      <div><span>Defense: </span>{{ data.properties.defense }}</div>
    </div>
    <div v-if="isMaterial">
      <span>Hearts Recovered: </span>{{ data.hearts_recovered }}
    </div>
    <div v-if="isMaterial">
      <span>Cooking Effect: </span>{{ data.cooking_effect }}
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

const route = useRoute();

const entry = ref(route.params.entry);
const data = ref(null);

const url = computed(() => {
  return `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${entry.value}`;
});

const isCreature = computed(() => {
  return data?.value.category === "creatures";
});

const isEquipment = computed(() => {
  return data?.value.category === "equipment";
});

const isMaterial = computed(() => {
  return data?.value.category === "materials";
});

const isMonster = computed(() => {
  return data?.value.category === "monster";
});

const isTreasure = computed(() => {
  return data?.value.category === "treasure";
});

const hasCommonLocations = computed(() => {
  return data?.value.common_locations?.length > 0;
});

const hasDrops = computed(() => {
  return data?.value.drops?.length > 0;
});

const categoryLink = (category) => {
  return `/category/${category.toLowerCase()}`;
};

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
