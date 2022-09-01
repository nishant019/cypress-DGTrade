import {
  //importing login function
  login 
} from 'D:/CY_DG_Trade/cypress/support/commands.js';
/**import {
  faker
} from 'D:/CY_DG_Trade/cypress/support/functions.js';
const faker = require('faker')*/

describe('Add User', () => {
  //Saving the data
 
  it('Adds Input values and saved entered data', () => {
    //use login function 
    login()
    //After login goto link for user list and creating a user
    cy.visit('/setup/user')
    //readFile to get values from addUser.josn file
    cy.readFile("D:/CY_DG_Trade/cypress/e2e/json/userList.json").then((val)=>{
      cy.xpath("//input[@name='userCode']").focus().type(val.userCode).should('have.value',val.userCode)
      cy.xpath("//input[@name='userName']").focus().type(val.userName).should('have.value',val.userName)
      cy.xpath("//input[@name='mobileNumber']").focus().type(val.phnNo).should('have.value',val.phnNo)
      cy.xpath("//input[@name='emailAddress']").focus().type(val.email).should('have.value',val.email)
      
      cy.xpath("//select").eq(0).select(val.mGender).contains(val.mGender)
      cy.xpath("//select").eq(1).select(val.branch).contains(val.branch)
      cy.xpath("//select").eq(2).select(val.yes).contains(val.yes)
      cy.xpath("//select").eq(3).select(val.yes).contains(val.yes)
      cy.xpath("//select").eq(4).select(val.branchUser).contains(val.branchUser)
    })
    cy.scrollTo('top')
    cy.xpath("//button[@type='submit']").click()
  })
})