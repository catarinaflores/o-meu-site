// svelte.config.js
import adapterGhpages from "svelte-adapter-ghpages";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // ...
  kit: {
    // ...
    paths: {
      base: "/o-meu-site/svelte",
    },
    // ...
    adapter: adapterGhpages(
  
    ),
    // ...
  },
};
export default config;
