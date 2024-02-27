<template>
  <nav v-if="showSidebar">
    <button class="nav-btn" @click="$emit('hide')">Close</button>
    <section>
      <h2 class="section-title">Categories</h2>
      <div class="categories">
        <NuxtLink
          class="category-link"
          v-for="category in categories"
          :to="categoryLink(category)"
          @click="$emit('hide')"
          >{{ category }}</NuxtLink
        >
      </div>
    </section>
    <section>
      <h4>Made by Caffeine</h4>
    </section>
  </nav>
</template>

<script setup>
const { showSidebar } = defineProps(["showSidebar"]);
const categories = ref([
  "Creatures",
  "Equipment",
  "Materials",
  "Monsters",
  "Treasure",
]);

const categoryLink = (category) => {
  return `/category/${category.toLowerCase()}`;
};
</script>

<style scoped lang="scss">
nav {
  height: 100%;
  width: 300px;
  position: absolute;
  z-index: 10;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  background: lightgrey;
  padding: 1rem 1rem;
}

.nav-btn {
  position: absolute;
  right: 1rem;
}

.section-title {
  margin-bottom: 1rem;
}

.categories {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 0.5rem;
}
</style>
