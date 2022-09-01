require('cypress-xpath');

export const login = () => {
    cy.readFile('D:/CY_DG_Trade/cypress/e2e/json/values.json').then((val) => {
    cy.visit('baseUrl/login')
    cy.xpath('//input[@name="username"]').click().type(val.userId).should('have.value',val.userId)
    cy.xpath('//input[@name="password"]').click().type(val.password).should('have.value',val.password)
    cy.xpath('//div[@class="pl-2"]').click().wait(3850)
    })
}



