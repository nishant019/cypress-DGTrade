const { login } = require("/cypress/support/commands")
/**
 * Values used from userList.json
 * Other Values like userCode,userName etc are not edit values and is only used in "Add User.cy.js"
 * For Allow Payment and Allow Purchase Share []
    "yes" , "no"
 * For User Types simply add one of below for select value
    "superUser"
    "branchUser"
    "branchAdmin"
 * For Gender simply add one of the below
    "mGender"
    "fGender"
    "oGender"
 * For Search keyword 
    "search"

 * Values for Editing user code,User Name, Phone Number Email and Branch
    "eUserCode"
    "eUserName"
    "ePhnNo"
    "eEmail"
    "eBranch"
 */
describe('Add User', () => {
  //Saving the data
 
  it('Adds Input values and saved entered data', () => {
    //use login function 
    login()
    //After login goto link for user list and creating a user
    cy.visit('/setup/user')
    //readFile to get values from addUser.josn file
    cy.readFile("cypress/json fields/userList.json").then((val)=>{
      //input values
      //user code
      cy.xpath("//input[@name='userCode']").focus().type(val.userCode).should('have.value',val.userCode)
      //user name
      cy.xpath("//input[@name='userName']").focus().type(val.userName).should('have.value',val.userName)
      //mobile number
      cy.xpath("//input[@name='mobileNumber']").focus().type(val.phnNo).should('have.value',val.phnNo)
      //email
      cy.xpath("//input[@name='emailAddress']").focus().type(val.email).should('have.value',val.email)
      //Selecting values
      //gender
      cy.xpath("//div[@class='card-body']//select").eq(0).select(val.mGender).contains(val.mGender)
      //branch
      cy.xpath("//div[@class='card-body']//select").eq(1).select(val.branch).contains(val.branch)
      //allow payemnt
      cy.xpath("//div[@class='card-body']//select").eq(2).select(val.yes).contains(val.yes)
      //allow purchase share transfer
      cy.xpath("//div[@class='card-body']//select").eq(3).select(val.yes).contains(val.yes)
      //user type
      cy.xpath("//div[@class='card-body']//select").eq(4).select(val.branchUser).contains(val.branchUser)
      //Role
      cy.xpath("//div[@class='card-body']//select").eq(5).select(val.branchUser).contains(val.branchUser)
      cy.scrollTo('top')
      //submit
      //cy.xpath("//button[@type='submit']").click() 
      /**________________________________________________________
      changing username into upper case to match value in retrived data
      searching added username to verify if user is added or not
      uncomment below script only when submit
      */
      // var userName = val.userName.toUpperCase(); 
      // cy.xpath("//input[@aria-label='Search']").eq(1).focus().clear().type(val.userName).should('have.value',val.userName).wait(500)
      // //verify for each value if added values is updated or not
      // cy.xpath("//tr[@class='MuiTableRow-root MuiTableRow-hover']").children()
      //   .should('contain',userName)
      //   .and('contain',val.userCode)
      //   .and('contain',val.email)
      //   .and('contain',val.phnNo)
      //   .and('contain',val.tdBranchUser)
      //   .and('contain',val.mGender)
      //   .and('contain',val.branch)   
    })
  })
})