/// <reference types="cypress"/>

const asertion_login = require('../fixtures/asertion_login.json');

describe('Realizar la autenticación en el aplicativo StarSharp', () => {

    beforeEach(() => {
        cy.visit('');
        cy.fixture('user').as('userData');
        cy.fixture('asertion_homePage').as('asertion_homePage');
    });

    it('Validar el homePage', function() {

        cy.authenticate(this.userData.rightname, this.userData.rightPassword, asertion_login);

    });
});