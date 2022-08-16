// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('request_REST', (cookies) => {

    cy.request({
        method: 'POST',
        url: 'https://serenity.is/demo/Services/Organization/BusinessUnit/List',
        headers: {
            'Cookie': `${cookies[0].name=cookies[0].value}; ${cookies[1].name=cookies[1].value}; ${cookies[2].name=cookies[2].value}`,
            'X-CSRF-TOKEN': `${cookies[2].value}`
        },
        body: {
            "IncludeColumns": [
                "UnitId",
                "Name",
                "Add Child Unit",
                "ParentUnitName"
            ]
        }
    })
});