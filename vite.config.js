import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/qiqiWeather',
  resolve: {
    alias:{
      '@m': path.resolve(__dirname, './src/models'),
      '@h': path.resolve(__dirname, './src/hooks'),
      '@c': path.resolve(__dirname, './src/components')
    }
  }
})
