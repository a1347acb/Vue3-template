import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import * as path from "path";
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import Unocss from 'unocss/vite'
import Pages from 'vite-plugin-pages'
import Layouts from 'vite-plugin-vue-layouts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],

      // global imports to register
      imports: [
        // presets
        'vue',
        '@vueuse/core',
        'vue-router'
      ],
      // Enable auto import by filename for default module exports under directories
      defaultExportByFilename: false,

      // Auto import for module exports under directories
      // by default it only scan one level of modules under the directory
      dirs: [
        // './hooks',
        // './composables' // only root modules
        './src/composables/**', // all nested modules
        './src/store/**'
        // ...
      ],
      resolvers: [
        IconsResolver({
          prefix: 'Icon'
        })
      ],

      // Filepath to generate corresponding .d.ts file.
      // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
      // Set `false` to disable.
      dts: './auto-imports.d.ts',

      // Auto import inside Vue template
      // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
      vueTemplate: false,

      // Inject the imports at the end of other imports
      injectAtEnd: true,
    }),
    Components({
      extensions: ['vue', 'md'],

      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],

      // custom resolvers
      resolvers: [
        IconsResolver({
          // 这里添加需要引入的图标命名空间，比如ep、codicon
          enabledCollections: [
            'ep'
          ]
        })
      ],
      dts: './components.d.ts'
    }),
    Icons({
      autoInstall: true,
      scale: 1,
    }),
    Unocss(),
    Pages({
      dirs: [
        { dir: 'src/pages', baseRoute: '' }
      ]
    }),
    Layouts({
      layoutsDirs: 'src/layouts',
      defaultLayout: 'main'
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
