const meet = require('../../ui/meet');

Cypress.Commands.add("meeting", (asertion_meet) => {

    cy.get(meet.TITLE_MEETING).should('be.visible').contains(asertion_meet.TITLE_MEETING);

    cy.get(meet.BUTTON_NEW_MEETING).should('be.visible').contains(asertion_meet.TITLE_NEW_MEETING).click();
});