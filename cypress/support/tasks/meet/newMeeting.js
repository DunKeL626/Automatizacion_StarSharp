const meet = require('../../ui/meet');
const date = new Date();

Cypress.Commands.add("newMeeting", (asertion_meet, form_new_meet) => {

    cy.get(meet.TITLE_NEW_MEETING).should('be.visible').contains(asertion_meet.TITLE_NEW_MEETING);

    cy.get(meet.DATE_MEETING_NAME).should('be.visible').contains(asertion_meet.DATE_MEETING_NAME);
    cy.get(meet.DATE_MEETING_TYPE).should('be.visible').contains(asertion_meet.DATE_MEETING_TYPE);
    cy.get(meet.DATE_START_DATE).should('be.visible').contains(asertion_meet.DATE_START_DATE);
    cy.get(meet.DATE_LOCATION).should('be.visible').contains(asertion_meet.DATE_LOCATION);
    cy.get(meet.DATE_ORGANIZED_BY).should('be.visible').contains(asertion_meet.DATE_ORGANIZED_BY);
    cy.get(meet.DATE_ATTENDEE_LIST).should('be.visible').contains(asertion_meet.DATE_ATTENDEE_LIST);
    cy.get(meet.DATE_MEETING_NUMBER).should('be.visible').contains(asertion_meet.DATE_MEETING_NUMBER);
    cy.get(meet.DATE_END_DATE).should('be.visible').contains(asertion_meet.DATE_END_DATE);
    cy.get(meet.DATE_UNIT).should('be.visible').contains(asertion_meet.DATE_UNIT);
    cy.get(meet.DATE_REPORTER).should('be.visible').contains(asertion_meet.DATE_REPORTER);


    cy.get(meet.SELECT_MEETING_NAME).should('be.visible').type(form_new_meet.MEETING_NAME);

    cy.get(meet.SELECT_MEETING_TYPE).should('be.visible').click();
    cy.get(meet.TYPE_MEETING_TYPE).should('be.visible').type(`${form_new_meet.MEETING_TYPE}{enter}`);

    cy.get(meet.SELECT_LOCATION).should('be.visible').click();
    cy.get(meet.TYPE_LOCATION).should('be.visible').type(`${form_new_meet.LOCATION}{enter}`);

    cy.get(meet.SELECT_ORGANIZED_BY).should('be.visible').click();
    cy.get(meet.TYPE_ORGANIZED_BY).should('be.visible').type(`${form_new_meet.ORGANIZED_BY}{enter}`);

    form_new_meet.ATTENDEE_LIST.forEach(person => {
        cy.get(meet.SELECT_ATTENDEE_LIST).should('be.visible').click();
        cy.get(meet.TYPE_ATTENDEE_LIST).should('be.visible').type(`${person}{enter}`);
    });

    cy.get(meet.SELECT_MEETING_NUMBER).should('be.visible').type(form_new_meet.MEETING_NUMBER);

    cy.get(meet.SELECT_UNIT).should('be.visible').click();
    cy.get(meet.TYPE_UNIT).should('be.visible').type(`${form_new_meet.UNIT}{enter}`);

    cy.get(meet.SELECT_REPORTER).should('be.visible').click();
    cy.get(meet.TYPE_REPORTER).should('be.visible').type(`${form_new_meet.REPORTER}{enter}`);

    cy.get(meet.SELECT_START_DATE).should('be.visible').clear().click().type(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
    cy.get(meet.HOUR_START_DATE).should('be.visible').select(form_new_meet.HOUR_START_DATE);
    cy.get(meet.SELECT_END_DATE).should('be.visible').clear().click().type(`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`);
    cy.get(meet.HOUR_END_DATE).should('be.visible').select(form_new_meet.HOUR_END_DATE);

    cy.get(meet.BUTTON_SAVE).should('be.visible').click();

    cy.get(meet.ROW_MEETING_NAME).should('be.visible');


});