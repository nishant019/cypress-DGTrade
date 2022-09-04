const { login } = require("../support/commands")

describe('Add User', () => {
  //Saving the data
 
  it('Adds Input values and saved entered data', () => {
    //use login function 
    login()
    //After login goto link for user list and creating a user
    cy.visit('/setup/user')
    //readFile to get values from addUser.josn file
    cy.readFile("/DG Trade/cypress/e2e/json/userList.json").then((val)=>{
      cy.xpath("//input[@name='userCode']").focus().type(val.userCode).should('have.value',val.userCode)
      cy.xpath("//input[@name='userName']").focus().type(val.userName).should('have.value',val.userName)
      cy.xpath("//input[@name='mobileNumber']").focus().type(val.phnNo).should('have.value',val.phnNo)
      cy.xpath("//input[@name='emailAddress']").focus().type(val.email).should('have.value',val.email)
      
      cy.xpath("//select").eq(0).select(val.mGender).contains(val.mGender)
      cy.xpath("//select").eq(1).select(val.branch).contains(val.branch)
      cy.xpath("//select").eq(2).select(val.yes).contains(val.yes)
      cy.xpath("//select").eq(3).select(val.yes).contains(val.yes)
      cy.xpath("//select").eq(4).select(val.branchUser).contains(val.branchUser)
      //changing username into upper case to match value in retrived data
      var userName = val.userName.toUpperCase(); 
      cy.xpath("//input[@aria-label='Search']").focus().clear().type(val.userName).should('have.value',val.userName).wait(500)
      
      
      //verify for each value if added values is updated or not
      cy.xpath("//tr[@class='MuiTableRow-root MuiTableRow-hover']").children()
        .should('contain',userName)
        .and('contain',val.userCode)
        .and('contain',val.email)
        .and('contain',val.phnNo)
        .and('contain',val.tdBranchUser)
        .and('contain',val.mGender)
        .and('contain',val.branch)    
    })
    cy.scrollTo('top')
    cy.xpath("//button[@type='submit']").click()
  })
})