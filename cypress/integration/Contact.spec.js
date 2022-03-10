describe('Category Index Unit test', () => {
  before(() => {
    cy.visit('http://localhost:3000/contact')
  })
  it('renders the index page', () => {
    cy.get('#contact-index')
      .should('be.visible')
      .should('exist')
      .contains('Contact - the right way to get to know each other.', { matchCase: false })
  })
  it('renders the illustration', () => {
    cy.get('#contact-hero-illustration').should('be.visible').should('exist')
  })
  it('renders the contact form', () => {
    cy.get('#contact-form').should('be.visible').should('exist').contains('Send a message', { matchCase: false })
  })
  it('submit a request', () => {
    cy.get('#fullname').type('John Doe {enter}')
    cy.get('#email').type('john.doe@email.com {enter}')
    cy.get('#subject').type('Test Title {enter}')
    cy.get('#message').type('lorem ipsum test message... {enter}')
    cy.get('#submit-button').click()
  })
})