/// <reference types="cypress"/>

describe('google search', () => {
    beforeEach(() => {
        cy.visit('https://www.google.com');
    });
    it('should work', () => {
        cy.get('input[type=text]').type('再帰{enter}');
        cy.contains('もしかして: 再帰');
    });
});
