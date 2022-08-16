const businessUnits = require('../../ui/businessUnits');

Cypress.Commands.add("BusinessUnits", (asertion_businessUnits) => {

    cy.get(businessUnits.TITLE_BUSINESS_UTILS).should('be.visible').contains(asertion_businessUnits.TITLE_BUSINESS_UTILS);

    cy.getCookies().then((cookies) => {

        cy.request_REST(cookies).then((response) => {

            response.body.Entities.forEach(async(nav, index) => {

                cy.get(`div[class="slick-cell l0 r0 align-right"] > a[data-item-id="${nav.UnitId}"]`).should('be.visible').and('have.text', nav.UnitId);
                cy.get(`div[class="slick-cell l1 r1"] > a[data-item-id="${nav.UnitId}"]`).should('be.visible').and('have.text', nav.Name);

                if (index == 0) cy.get(`div[class="slick-cell l3 r3"] > a[data-item-id="${nav.UnitId}"]`).should('exist');
                else cy.get(`div[class="slick-cell l3 r3"] > a[data-item-id="${nav.UnitId}"]`).should('be.visible').contains(nav.ParentUnitName);
            });
        });
    });

    cy.get(businessUnits.BUTTON_NEW_BUSINESS_UTILS).should('be.visible').contains(asertion_businessUnits.TITLE_NEW_BUSINESS_UTILS).click();
});