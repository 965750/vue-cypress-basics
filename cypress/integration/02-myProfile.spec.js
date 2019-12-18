describe('MyProfile', () => {
  beforeEach(function () {
    cy.visit('http://localhost:8080/myProfile')
  })

  it('should fetch data', () => {
    cy.get('[data-cy-todo-list]').should('contain', 'was not completed')
  })

  it('should fetch mocked data', () => {
    cy.fixture('todos').as('todosMock')

    cy.server()
    cy.route({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/todos/1',
      response: '@todosMock',
      status: 200
    })

    cy.visit('http://localhost:8080/myProfile')

    cy.get('[data-cy-todo-list]').should('contain', 'mockedTitle')
  })
})