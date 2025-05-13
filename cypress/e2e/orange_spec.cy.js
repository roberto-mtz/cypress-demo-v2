Cypress.on('uncaught:exception', () => false)

describe('Prueba avanzada en OrangeHRM', () => {
  it('Flujo completo: login, navegación y logout', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')

    // Login
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()

    // Validar Dashboard
    cy.url().should('include', '/dashboard')
    cy.contains('Dashboard').should('be.visible')

    // Ir a sección PIM
    cy.get('a[href="/web/index.php/pim/viewPimModule"]').click()
    cy.url().should('include', '/pim')
    cy.contains('Employee Information').should('be.visible')

    // Logout
    cy.get('img[alt="profile picture"]').click()
    cy.contains('Logout').click()

    cy.url().should('include', '/auth/login')
  })
})
