describe('Login', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080')
  })

  it('should check if page has default text', () => {
    cy.contains('Login To Your Account')
  })

  it('should NOT login and show error modal', () => {
    cy.get('[data-cy-login-input]').type('notValidLogin')
    cy.get('[data-cy-password-input]').type('notValidPass')
    cy.get('[data-cy-submit-input]').click()
    cy.contains('incorrect login or password')
  })

  it('should login and redirect', () => {
    cy.get('[data-cy-login-input]').type('Login123')
    cy.get('[data-cy-password-input]').type('Pass123')
    cy.get('[data-cy-submit-input]').click()
    cy.contains('Welcome')
  })
})