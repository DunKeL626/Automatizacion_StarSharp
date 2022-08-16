const homePage = require('../../ui/homePage');

Cypress.Commands.add("getMeeting", (asertion_homePage) => {

    cy.get(homePage.MEETING).should('be.visible').contains(asertion_homePage.MEETING).click();

    cy.get(homePage.MEETINGS).should('be.visible').contains(asertion_homePage.MEETINGS).click();
});