import FullReload from 'vite-plugin-full-reload'
import autoprefixer from 'autoprefixer'
import { createHtmlPlugin } from 'vite-plugin-html'
import { defineConfig } from 'vite'
import dotenv from 'dotenv'
import handlebars from 'vite-plugin-handlebars'
import postcssCombine from 'postcss-combine-media-query'
import postcssPresetEnv from 'postcss-preset-env'
import { resolve } from 'path'
import serverConfig from './server.config.js'
import sortMediaQueries from 'postcss-sort-media-queries'
import tsconfigPaths from 'vite-tsconfig-paths'
import viteImagemin from 'vite-plugin-imagemin'

const root = resolve(__dirname, './src')
const outDir = resolve(__dirname, 'dist')
dotenv.config({ path: resolve(__dirname, '.env') })

export default defineConfig({
  base: './',
  publicDir: '../public/',
  preview: {
    port: 8080,
    strictPort: true,
  },
  server: serverConfig,
  plugins: [
    tsconfigPaths(),
    handlebars({
      reloadOnPartialChange: true,
      partialDirectory: resolve(__dirname, 'src/html/'),
    }),
    FullReload('./**/*', { delay: 0 }),
    viteImagemin({
      skipIfLarger: true,
      clearCache: true,
      gifsicle: {
        optimizationLevel: 2,
        interlaced: false,
      },
      optipng: {
        optimizationLevel: 2,
      },
      mozjpeg: {
        quality: 75,
      },
      pngquant: {
        quality: [0.8, 0.9],
        speed: 4,
      },
      svgo: {
        plugins: [
          {
            name: 'removeViewBox',
          },
          {
            name: 'removeEmptyAttrs',
            active: false,
          },
        ],
      },
    }),
    createHtmlPlugin({
      minify: true, // Опція для мініфікації HTML
      collapseWhitespace: true, // Об'єднує всі пробіли та нові рядки
      removeComments: true, // Видаляє всі коментарі з HTML-коду.
      removeEmptyAttributes: true, // Видаляє порожні атрибути з HTML-елементів (наприклад, class="")
      removeRedundantAttributes: true, // Видаляє атрибути, значення яких є за замовчуванням (наприклад, type="text" для <input>).
      minifyCSS: true, // Мініфікує CSS, вбудований у HTML.
      minifyJS: true, // Мініфікує JS, вбудований у HTML.
    }),
  ],
  css: {
    postcss: {
      plugins: [autoprefixer(), postcssPresetEnv(), postcssCombine(), sortMediaQueries({ sort: 'desktop-first' })],
    },
  },
  root: './src/',
  build: {
    outDir,
    emptyOutDir: true,
    chunkSizeWarningLimit: 2000,
    terserOptions: {
      compress: {
        drop_console: true,
        dead_code: true,
        unused: true,
        join_vars: true,
      },
      parse: {
        html5_comments: false,
        shebang: false,
      },
      format: {
        comments: false, // Видаляє всі коментарі
      },
      safari10: true,
    },
    rollupOptions: {
      input: {
        index: resolve(root, 'index.html'),
        home: resolve(root, 'pages/home/index.html'),
      },
      output: {
        assetFileNames: ({ name }) => {
          name = name.toLowerCase()

          if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
            return 'assets/images/[name]-[hash][extname]'
          }

          if (/\.css$/.test(name ?? '')) {
            return 'assets/styles/[name]-[hash][extname]'
          }

          if (/\.js$/.test(name ?? '')) {
            return 'assets/js/[name]-[hash][extname]'
          }

          // default value
          return 'assets/[name]-[hash][extname]'
        },
      },
    },
  },
  resolve: {
    alias: {
      '@': root,
    },
  },
})
