const businessUnits = require('../../ui/businessUnits');

Cypress.Commands.add("newBusinessUnits", (asertion_businessUnits) => {

    cy.get(businessUnits.TITLE_NEW_BUSINESS_UTILS).should('be.visible').contains(asertion_businessUnits.TITLE_NEW_BUSINESS_UTILS);
    cy.get(businessUnits.NAME_BUSINESS_UTILS).should('be.visible').contains(asertion_businessUnits.NAME_BUSINESS_UTILS);
    cy.get(businessUnits.TYPE_NAME_BUSINESS_UTILS).should('be.visible').type(asertion_businessUnits.TYPE_NAME_BUSINESS_UTILS);
    cy.get(businessUnits.PARNET_UNIT).should('be.visible').contains(asertion_businessUnits.PARNET_UNIT);
    cy.get(businessUnits.SELECT_PARNET_UNIT).should('be.visible').click()
    cy.get(businessUnits.SEARCH_PARNET_UNIT).type(`${asertion_businessUnits.SELECT_PARNET_UNIT}{enter}`);
    cy.get(businessUnits.SAVE_NEW_BUSINESS_UTILS).should('be.visible').contains(asertion_businessUnits.SAVE_NEW_BUSINESS_UTILS).click();
});