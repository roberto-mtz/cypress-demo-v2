Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

describe('Formulario Demo QA', () => {
  it('Llenar y validar formulario', () => {
    cy.visit('https://demoqa.com/text-box', { timeout: 120000 })
    cy.get('#userName').type('Juan Perez')
    cy.get('#userEmail').type('juan@mail.com')
    cy.get('#currentAddress').type('Direccion actual')
    cy.get('#permanentAddress').type('Direccion permanente')
    cy.get('#submit').click()

    cy.get('#output #name').should('contain', 'Juan Perez')
    cy.get('#output #email').should('contain', 'juan@mail.com')
  })
})
