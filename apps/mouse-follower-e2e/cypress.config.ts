import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset'

import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: { default: 'nx run mouse-follower:serve', production: 'nx run mouse-follower:preview' },
      ciWebServerCommand: 'nx run mouse-follower:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
})
