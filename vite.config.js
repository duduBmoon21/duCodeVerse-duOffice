import { defineConfig } from 'vite';
import path from 'path';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [
        laravel({
            input: 'resources/js/app.jsx',  // Path to your main entry file
            refresh: true,
        }),
        react(),  // Enabling React plugin
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js'),  // Path alias for '@/'
        },
    },
    server: {
        proxy: {
            '/app': 'http://127.0.0.1:8000',  // Ensure Laravel's backend is proxied correctly during dev
        },
    },
    build: {
        sourcemap: false,  // Enable sourcemaps if needed for debugging
    },
});
