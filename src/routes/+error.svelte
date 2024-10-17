<script>
  import { page } from '$app/stores';
  import Meta from '$lib/meta.svelte';
</script>

<template lang="pug">
  Meta(title='{ $page.status }', description='{ $page.error.message }')
  .top-space
  .ids__wrapper
    h1 Ошибка: {$page.status}
    +if('$page.status == 404')
      p Нет такой страницы! ¯\_(ツ)_/¯
      +else
        p  We already know the issue and will fix it as soon as possible.
</template>
