import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run tic-tac-toe:serve',
        production: 'nx run tic-tac-toe:preview',
      },
      ciWebServerCommand: 'nx run tic-tac-toe:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
