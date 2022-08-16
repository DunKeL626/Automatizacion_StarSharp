/// <reference types="cypress"/>

const asertion_homePage = require('../../fixtures/asertion_homePage.json');
const asertion_meet = require('../../fixtures/asertion_meet.json');
const asertion_login = require('../../fixtures/asertion_login.json');
const form_new_meet = require('../../fixtures/form_new_meet.json');

describe('Nueva reunión', () => {

    beforeEach(() => {
        cy.visit('');
        cy.fixture('user').as('userData');
        cy.fixture('asertion_homePage').as('asertion_homePage');
    });

    it('Crear una nueva reunión', function() {

        cy.authenticate(this.userData.rightname, this.userData.rightPassword, asertion_login);
        cy.getMeeting(asertion_homePage);
        cy.meeting(asertion_meet);
        cy.newMeeting(asertion_meet, form_new_meet);
    });
});