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
      enableFallbackComponent: true,
      customFallbackComponent: 'components/modules/content/CustomFallback',
      components: {
        p1Generic: 'templates/P1-Generic',
        stage: 'components/modules/content/Stage',
        stageSlider: 'components/modules/content/StageSlider',
        teaser: 'components/modules/content/Teaser',
        copyFull: 'components/modules/content/CopyFull',
        copyHalf: 'components/modules/content/CopyHalf',
        copyImage: 'components/modules/content/CopyImage',
        image: 'components/modules/content/Image',
        donation: 'components/modules/content/Donation',
        resetConsent: 'components/modules/content/ResetConsent',
        relatedLinks: 'components/modules/content/RelatedLinks',
        profile: 'components/modules/content/Profile',
        profileIntro: 'components/modules/content/ProfileIntro',
        video: 'components/modules/content/Video',
        logowall: 'components/modules/content/Logowall',
      },
      apiOptions: {
        region: 'eu'
      }
    })
  ]
});
