// @ts-check
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'astro/config'
import vue from '@astrojs/vue'

const root = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  integrations: [vue()],
  // Bind to IPv4 so http://localhost:4321 works on Windows
  // (default can listen on ::1 only, which browsers often fail to open).
  server: {
    host: '127.0.0.1',
  },
  vite: {
    resolve: {
      // tabulator-tables ESM build has no default export; survey-analytics expects one.
      alias: [
        {
          find: /^tabulator-tables$/,
          replacement: path.resolve(
            root,
            'node_modules/tabulator-tables/dist/js/tabulator.min.js',
          ),
        },
        {
          find: 'survey-vue3-ui',
          replacement: path.resolve(
            root,
            'node_modules/survey-vue3-ui/survey-vue3-ui.es.js',
          ),
        },
        {
          find: 'survey-creator-vue',
          replacement: path.resolve(
            root,
            'node_modules/survey-creator-vue/survey-creator-vue.es.js',
          ),
        },
      ],
    },
    ssr: {
      noExternal: [
        'survey-core',
        'survey-vue3-ui',
        'survey-creator-core',
        'survey-creator-vue',
        'survey-analytics',
        'survey-pdf',
      ],
    },
  },
})
