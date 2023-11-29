import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    fixturesFolder: './src/pages/cypress/fixtures',
    screenshotsFolder: './src/pages/cypress/screenshots',
    videosFolder: './src/pages/cypress/videos',
    downloadsFolder: './src/pages/cypress/downloads',
    supportFile: './src/pages/cypress/support/e2e.ts',
    specPattern: './src/pages/cypress/e2e/**/*.{js,jsx,ts,tsx}',

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
