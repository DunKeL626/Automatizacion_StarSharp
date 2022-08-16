const loginPage = require('../../ui/loginPage');

Cypress.Commands.add("authenticate", (email, password, asertion_login) => {

    cy.get(loginPage.LOGO).should('be.visible');

    cy.get(loginPage.FORM_TITLE).should('be.visible').contains(asertion_login.FORM_TITLE);

    if (email == null || password == null) {
        cy.get(loginPage.USERNAME_FIELD).clear()
        cy.get(loginPage.PASSWORD_FIELD).clear()
    } else {
        cy.get(loginPage.USERNAME_FIELD).clear().type(email);
        cy.get(loginPage.PASSWORD_FIELD).clear().type(password);
    }

    cy.get(loginPage.USERNAME_TITLE).should('be.visible').contains(asertion_login.USERNAME_TITLE);

    cy.get(loginPage.PASSWORD_TITLE).should('be.visible').contains(asertion_login.PASSWORD_TITLE);

    cy.get(loginPage.PASSWORD_FORGOT).should('be.visible').contains(asertion_login.PASSWORD_FORGOT);

    cy.get(loginPage.SIGN_IN_BUTTON).should('be.visible').click();

    cy.get(loginPage.NO_ACCOUNT).should('be.visible').contains(asertion_login.NO_ACCOUNT);
});