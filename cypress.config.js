const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportWidth: 1920,
    viewportHeight: 1080,
    e2e: {
        baseUrl: 'https://serenity.is/demo/',
        specPattern: "cypress/e2e/**/*.js",
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
    },
});