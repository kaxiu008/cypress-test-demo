/// <reference types="Cypress" />

describe('Google Home Page', () => {
  let views = ['macbook-15', 'ipad-2', 'iphone-6']

  views.forEach(view => {
    it(`Visit index page with ${view}`, () => {
      cy.viewport(view)

      cy.visit('https://www.google.com')
      cy.title().should('eq', 'Google')
    })
  })
})
