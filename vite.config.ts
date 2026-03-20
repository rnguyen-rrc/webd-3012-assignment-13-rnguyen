/// <reference types="vitest" />
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],

  test: {
    globals: true,
    environment: 'jsdom',
    pool: 'forks',
    setupFiles: ['./src/setupTests.ts'],
    include: ['src/**/*.tests.tsx', 'src/**/*.test.tsx'],
  },
});
