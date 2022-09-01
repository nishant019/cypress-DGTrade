describe('Add User', () => {
  it('Adds Input values and clears data', () => {
    cy.visit('http://103.94.159.167/BOM/web/index.html#/login')
    //First Login to company page using admin crenditials
    cy.get(':nth-child(2) > .input-group > .form-control').click().type('PRABHAT').should('have.value','PRABHAT')
    cy.get(':nth-child(3) > .input-group > .form-control').click().type('Dghub@2022').should('have.value','Dghub@2022')
    cy.get('.btn').click().wait(5000)
    //After login visit User list page
    cy.visit('http://103.94.159.167/BOM/web/index.html#/setup/user')
    cy.get(':nth-child(1) > .form-group > .form-control').focus().type('420').should('have.value','420')
    cy.get(':nth-child(2) > .form-group > .form-control').focus().type('Nishant Poudel').should('have.value','Nishant Poudel')
    cy.get(':nth-child(3) > .form-group > .form-control').focus().type('9876543210').should('have.value','9876543210')
    cy.get(':nth-child(4) > .form-group > .form-control').focus().type('npoudel018@outlook.com').should('have.value','npoudel018@outlook.com')
    cy.get(':nth-child(5) > .form-group > .form-control').select('MALE').should('have.value','MALE')
    cy.get(':nth-child(6) > .form-group > .form-control').select('PKR').should('have.value','2')
    cy.get(':nth-child(7) > .form-group > .form-control').select('Yes').should('have.value','Y')
    cy.get(':nth-child(8) > .form-group > .form-control').select('Yes').should('have.value','Y')
    cy.get(':nth-child(9) > .form-group > .form-control').select('Super User').should('have.value','SUA')
    cy.scrollTo('top')
    //click clear to verify if added data is cleared
    cy.get('.card-footer > .btn-danger').click()
    cy.scrollTo('top')

    cy.get(':nth-child(1) > .form-group > .form-control').should('have.value','')
    cy.get(':nth-child(2) > .form-group > .form-control').should('have.value','')
    cy.get(':nth-child(3) > .form-group > .form-control').should('have.value','')
    cy.get(':nth-child(4) > .form-group > .form-control').should('have.value','')
    cy.get(':nth-child(5) > .form-group > .form-control').should('have.value','')
    //dropdowns
    cy.get(':nth-child(6) > .form-group > .form-control').should('have.value','0')
    cy.get(':nth-child(7) > .form-group > .form-control').should('have.value','')
    cy.get(':nth-child(8) > .form-group > .form-control').should('have.value','')
    cy.get(':nth-child(9) > .form-group > .form-control').should('have.value','')
  })    
})