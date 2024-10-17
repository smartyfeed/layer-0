<script>
  import { SignIn, SignOut } from "@auth/sveltekit/components"
  import { page } from '$app/stores';

  $: ariaCurrent = (/** @type {string} */ currUrl) => ($page.url.pathname === currUrl ? 'page' : undefined);
</script>

<template lang="pug">
  .optica-header-n-footer
    img.menu(src="/images/eye.svg")
    span Книга стажёра
    a(href="/") Содержание
    +if('$page.data.session.user')
      strong {$page.data.session.user?.name ?? "User"}
      SignOut 
       a Выйти
      +else()
      SignIn 
        a Войти
  .ids__stack.M 
</template>