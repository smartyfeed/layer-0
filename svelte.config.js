import adapter from '@sveltejs/adapter-node';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter({
      precompress: true
    }),
    alias: {
      $styles: 'src/styles/'
    }
  },
  preprocess: sveltePreprocess({
    sourceMap: process.env.NODE_ENV === 'development',
    pug: true,
    postcss: true
  }),
  compilerOptions: {
    sourcemap: process.env.NODE_ENV === 'development'
  }
};

export default config;
