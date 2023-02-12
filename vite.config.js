import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'

export default defineConfig({
  plugins: [solidPlugin({
    dev: true,
    hot: true    
  })],
  server: {
    port: 3000,
    hmr: true
  }
})
