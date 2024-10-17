<script>
  export let title = 'Оптика72 · Книга стажёра';
  export let description = 'Поможет успешно пройти стажировку';
  export let cover = '/images/IMG_0202.jpg';
  export let coverWidth = '2000';
  export let coverHeight = '1145';
  export let coverAlt = 'Cover';
  export let url = '/';

  $: pageUrl = `${new URL(url, 'https://book-optica72.ru/')}`;

  $: scheme = [
    { name: 'description', content: description },
    { name: 'author', content: 'Оптика72 • viktort.ru' },
    { property: 'og:type', content: 'website' },
    { property: 'og:title', content: title },
    { property: 'og:description', content: description },
    { property: 'og:site_name', content: 'Cross-R' },
    { property: 'og:url', content: pageUrl },
    { property: 'og:image', content: cover },
    { property: 'og:image:type', content: 'image/jpg' },
    { property: 'og:image:width', content: coverWidth },
    { property: 'og:image:height', content: coverHeight },
    { property: 'og:image:alt', content: coverAlt },
    { name: 'twitter:title', content: title },
    { name: 'twitter:description', content: description },
    { name: 'twitter:url', content: pageUrl },
    { name: 'twitter:card', content: 'summary_large_image' }
  ];
</script>

<template lang="pug">
  svelte:head
    title {title}
    +each('scheme as { name, property, content }')
      +if('content')
        meta({name}, {property}, {content})
</template>
