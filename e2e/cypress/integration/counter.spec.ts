/// <reference types="cypress"/>

describe('counter', () => {

    const url = 'http://localhost:3000/';
    const api = 'https://api.countapi.xyz/hit/tomingtoming/cypress-spa-practice';

    beforeEach(() => {
        cy.server();
    });

    it('Error', () => {
        // given
        cy.route({method: 'GET', url: api, status: 500, response: {}}).as('get');
        // when
        cy.visit(url).wait('@get');
        // then
        cy.contains('ERROR[something error happened]');
    });

    it('Kiriban', () => {
        // given
        cy.route('GET', api, "fixture:kiriban.json").as('get');
        // when
        cy.visit(url).wait('@get');
        // then
        cy.contains('You are 10000th visitor!');
    });
});
