<template>
  <header>
    <NuxtLink to="/" class="header-title">COMPENDIUM</NuxtLink>
    <button class="menu-btn" @click="$emit('show')">Menu</button>
  </header>
</template>

<script setup></script>

<style scoped lang="scss">
header {
  position: fixed;
  z-index: 5;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  background: white;
}

.menu-btn {
  position: absolute;
  right: 1rem;
}

.header-title {
  font-size: 24px;
}
</style>
