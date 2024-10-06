<script>
  import Sidebar from './Sidebar.svelte';
</script>

<template lang="pug">
  .wrap
    Sidebar
    section.ids__wrapper
      slot
</template>

<style lang="postcss">
  .wrap {
    display: flex;
    align-items: flex-start;
  }
</style>
