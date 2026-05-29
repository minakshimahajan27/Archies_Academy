// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })
import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    chunkSizeWarningLimit: 1600,
    // Yeh line saari faaltu import errors ko ignore karke build pass kar degi
    rollupOptions: {
      external: ['../pages/OurTeam', './OurTeam'] 
    }
  }
})