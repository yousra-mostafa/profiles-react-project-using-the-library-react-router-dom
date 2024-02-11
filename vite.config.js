import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import { defineConfig } from 'vite';


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@fortawesome/react-fontawesome': '@fortawesome/react-fontawesome',
    //  '@fortawesome/fontawesome-svg-core':'@fortawesome/fontawesome-svg-core',

    },
  },
})
// vite.config.js

