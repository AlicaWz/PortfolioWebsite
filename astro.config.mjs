import { defineConfig } from 'astro/config';

import node from '@astrojs/node';
import icon from 'astro-icon';
import { defineConfig } from 'astro/config';
import storyblok from '@storyblok/astro';
import { loadEnv } from 'vite';
import vercel from '@astrojs/vercel/serverless';

const env = loadEnv('', process.cwd(), 'STORYBLOK');

export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    icon(), 
    storyblok({
      accessToken: env.STORYBLOK_TOKEN,
      bridge: env.STORYBLOK_IS_PREVIEW === 'yes',
      enableFallbackComponent: true,
      components: {
        p1Generic: 'templates/P1-Generic',
        p3AboutMe: 'templates/P3-AboutMe',
        c1Stage: 'components/modules/content/C1-Stage',
        c2Text: 'components/modules/content/C2-Text', 
        c21Text: 'components/modules/content/C2.1-Text',
        c3Image: 'components/modules/content/C3-Image',
        c4Numbers: 'components/modules/content/C4-Numbers',
        c5Timeline: 'components/modules/content/C5-Timeline',
        t2Overview: 'components/modules/teaser/T2-Overview'
      },
      apiOptions: {
        region: 'eu'
      }
    })
  ]
});
