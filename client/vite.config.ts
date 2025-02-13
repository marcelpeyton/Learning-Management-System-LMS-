import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    port: 10000,
    open: true,
    proxy: {
   '/graphql': {
        target: 'https://learning-management-system-lms-server2.onrender.com',
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
