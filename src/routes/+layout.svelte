<script>
  import '$styles/app.pcss';
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
</script>

<template lang="pug">
  .wrap
    Header
    main
      slot
    Footer
</template>


<style lang="postcss">
  .wrap {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  main {
    flex: 1;
  }
</style>