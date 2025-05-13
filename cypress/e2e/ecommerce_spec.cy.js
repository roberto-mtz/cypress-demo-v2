Cypress.on('uncaught:exception', () => false)

describe('Flujo completo en SauceDemo', () => {
  it('Login, agregar productos y hacer checkout', () => {
    // Visitar e iniciar sesión
    cy.visit('https://www.saucedemo.com/')
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()

    // Esperar que se cargue la página de productos
    cy.url().should('include', '/inventory')
    cy.contains('Products').should('be.visible')

    // Agregar productos
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click()
    cy.get('.shopping_cart_badge').should('contain', '2')

    // Validar en carrito
    cy.get('.shopping_cart_link').click()
    cy.url().should('include', '/cart')
    cy.contains('Sauce Labs Backpack').should('be.visible')
    cy.contains('Sauce Labs Bike Light').should('be.visible')
    cy.get('[data-test="checkout"]').click()

    // Llenar datos personales
    cy.get('[data-test="firstName"]').type('Juan')
    cy.get('[data-test="lastName"]').type('Pérez')
    cy.get('[data-test="postalCode"]').type('12345')
    cy.get('[data-test="continue"]').click()

    // Finalizar compra
    cy.get('[data-test="finish"]').click()
    cy.contains('Thank you for your order!').should('be.visible')
  })
})
