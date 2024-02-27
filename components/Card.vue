<template>
  <NuxtLink :to="entryLink">
    <div class="card">
      <img
        class="card-image"
        :src="entry.image"
        :alt="entry.name"
        loading="lazy"
      />
      <div class="card-title-wrapper">
        <span>{{ entry.name }}</span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup>
const { category, entry } = defineProps(["category", "entry"]);

const entryLink = computed(() => {
  return `/${category.toLowerCase()}/${entry.name.replaceAll(" ", "_")}`;
});
</script>

<style scoped lang="scss">
.card {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  align-self: center;
  border: 1px solid black;
  border-radius: 0.25rem;
  overflow: hidden;
}

.card-image {
  width: calc(50vw - 1.5rem);
  aspect-ratio: 1;
  object-fit: cover;
}

.card-title-wrapper {
  flex: 1;
  padding: 0.5rem 0.25rem;
  width: 100%;
  text-align: center;
}
</style>
