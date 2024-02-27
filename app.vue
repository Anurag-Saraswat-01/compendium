<template>
  <Header @show="toggleSidebar" />
  <Sidebar :showSidebar="showSidebar" @hide="toggleSidebar" />
  <main>
    <NuxtPage />
  </main>
</template>

<script setup>
const showSidebar = ref(false);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  height: 100vh;
}

main {
  position: absolute;
  top: 2.5rem;
  padding: 1rem;
  height: calc(100vh - 2.5rem);
  overflow-y: scroll;
}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
