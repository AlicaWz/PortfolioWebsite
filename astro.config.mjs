import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

export default defineConfig({
  output: 'server',
  adapter: node({
    mode: 'standalone'
  }),
  integrations: [
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
      enableFallbackComponent: true,
      components: {
        p1Generic: 'templates/P1-Generic',
        c1Stage: 'components/modules/content/C1-Stage'
      },
      apiOptions: {
        region: 'eu'
      }
    })
  ]
});
