describe('Company login', () => {
  it('LogIn Company User, UnSuccessful login', () => {
    cy.visit('baseUrl/login')
    cy.get(':nth-child(2) > .input-group > .form-control').click().type('IllegalUser').should('have.value','IllegalUser')
    cy.get(':nth-child(3) > .input-group > .form-control').click().type('Dghub@2022').should('have.value','Dghub@2022')
    cy.get('.btn').click().wait(5000)
    /**Check for required validation message when user is not found */
    cy.get('span.text-danger').contains('Invalid Username IllegalUser')
  })
  it('LogIn Company User, Successful login', () => {
      cy.readFile('D:/CY_DG_Trade/cypress/e2e/values.json').then((val) => {
      cy.visit('baseUrl/login')
      cy.get(':nth-child(2) > .input-group > .form-control').click().type(val.userId).should('have.value',val.userId)
      cy.get(':nth-child(3) > .input-group > .form-control').click().type(val.password).should('have.value',val.password)
      cy.get('.btn').click().wait(5000)
      /**For trigger side bar */
      cy.get('.sidebar__brand').trigger('mouseover')
      //cy.get('.c-header-toggler.ml-3 > .c-header-toggler-icon').click().click()
    })
  })
})
