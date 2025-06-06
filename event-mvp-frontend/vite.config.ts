import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    base: "./",
    plugins: [react()],
    server: {
        port: 51417,
    },
    build: {
        outDir: 'build',
        target: 'esnext',
        emptyOutDir: true,
    },
});
