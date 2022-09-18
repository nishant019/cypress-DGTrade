const { newLogin } = require("/cypress/support/commands")

describe('User Logins for first time',() =>{
    it('Login and change password',()=>{
        newLogin()
        cy.readFile('cypress/json fields/values.json').then((val)=>{
            cy.xpath('//input[@name="oldPassword"]').focus().type(val.nPassword).should('have.value',val.nPassword)
            cy.xpath('//input[@name="newPassword"]').focus().type(val.password).should('have.value',val.password)
            cy.xpath('//input[@name="rePassword"]').focus().type(val.password).should('have.value',val.password)
            cy.xpath('//button[@type="submit"]').contains('Change').click()
        })
    })
})