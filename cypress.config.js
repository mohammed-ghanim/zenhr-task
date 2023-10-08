const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://zenhr-master.staging.devops.zenhr.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
