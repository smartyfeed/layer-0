<script>
  export let title = 'Cross-R';
  export let description = 'We here!';
  export let cover = 'https://full.cover/url.png';
  export let coverWidth = '1500';
  export let coverHeight = '1500';
  export let coverAlt = 'Cross-R';
  export let url = '/';

  $: pageUrl = `${new URL(url, 'https://site.url/')}`;

  $: scheme = [
    { name: 'description', content: description },
    { name: 'author', content: 'Cross-R' },
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
