<script>
  import { page } from '$app/stores';

  $: ariaCurrent = (/** @type {string} */ currUrl) => ($page.url.pathname === currUrl ? 'page' : undefined);

  import { SignIn } from "@auth/sveltekit/components"
</script>

<template lang="pug">
  .optica-header-n-footer
    img.menu(src="/images/eye.svg")
    span Книга стажёра
    a(href="/") Содержание
    SignIn (provider="authentik" signInPage="signin")
    a(href="/") Выйти
  .ids__stack.M 
</template>