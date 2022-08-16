/// <reference types="cypress"/>

const asertion_login = require('../../fixtures/asertion_login.json');
const asertion_businessUnits = require('../../fixtures/asertion_businessUnits.json');
const asertion_homePage = require('../../fixtures/asertion_homePage.json');

describe('Nuevo Business Units', () => {

    beforeEach(() => {
        cy.visit('');
        cy.fixture('user').as('userData');
        cy.fixture('asertion_homePage').as('asertion_homePage');
    });

    it('Crear un nuevo Business Units', function() {

        cy.authenticate(this.userData.rightname, this.userData.rightPassword, asertion_login);
        cy.getBusinessUnits(asertion_homePage);
        cy.BusinessUnits(asertion_businessUnits);
        cy.newBusinessUnits(asertion_businessUnits);
    });
});