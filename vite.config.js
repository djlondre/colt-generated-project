import { defineConfig } from 'vite';
import topLevelAwait from 'vite-plugin-top-level-await';

    import react from '@vitejs/plugin-react';

  
    // https://vitejs.dev/config/
    export default defineConfig({
		
      plugins: [react()],
      build: {
        target: 'esnext', // Ensure this is set to 'esnext'
      },
      esbuild: {
        target: 'esnext', // Also set esbuild target to 'esnext'
      },
			
    });