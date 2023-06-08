import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'index.ts',
      name: 'a11y-onKeyDown',
      fileName: (format) => `index.${format}.js`
    },
  }
})
