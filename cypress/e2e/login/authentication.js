/// <reference types="cypress"/>

const asertion_login = require('../../fixtures/asertion_login.json');
const loginPage = require('../../support/ui/loginPage');
const homePage = require('../../support/ui/homePage.js');

describe('Realizar la autenticación en el aplicativo StarSharp', () => {

    beforeEach(() => {
        cy.visit('');
        cy.fixture('user').as('userData');
        cy.fixture('asertion_login').as('asertion_login');
        cy.fixture('asertion_homePage').as('asertion_homePage');
    });

    it('Autenticación usuario y contraseña fallida', function() {
        cy.authenticate(this.userData.wrongname, this.userData.wrongPassword, asertion_login);
        cy.get(loginPage.ERROR_MESSAGE).should('be.visible').contains(this.asertion_login.ERROR_USERNAME_OR_PASSWORD);
    });

    it('Autenticación sin usuario y contraseña', function() {
        cy.authenticate(null, null, asertion_login);
        cy.get(loginPage.ERROR_MESSAGE).should('be.visible').contains(this.asertion_login.ERROR_MESSAGE);
    });

    it('Autenticación exitosa', function() {
        cy.authenticate(this.userData.rightname, this.userData.rightPassword, asertion_login);
        cy.get(homePage.DASHBOARD).should('be.visible').contains(this.asertion_homePage.DASHBOARD);
    });
});