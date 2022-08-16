const homePage = require('../../ui/homePage');

Cypress.Commands.add("getBusinessUnits", (asertion_homePage) => {

    cy.get(homePage.ORGANIZATION).should('be.visible').contains(asertion_homePage.ORGANIZATION).click();

    cy.get(homePage.BUSINESS_UNITS).should('be.visible').contains(asertion_homePage.BUSINESS_UNITS).click();
});