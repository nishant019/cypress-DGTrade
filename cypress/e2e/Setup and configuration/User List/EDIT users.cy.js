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
describe('Edit A user', () => {
  it('Searches ,edits and verifies edited values',()=>{
    //use login function 
    login()
    cy.visit('/setup/user').wait(1000)
    // Import Json
    cy.readFile("cypress/json fields/userList.json").then((val)=>{
      
    //Using value of search from json to retrive its data in table and editing first index of the table
    cy.xpath("//input[@aria-label='Search']").eq(1).focus().type(val.search).should('have.value',val.search).wait(500)
    var search = val.search.toUpperCase();
    cy.xpath("//tbody[@class='MuiTableBody-root']").contains(search)
    cy.xpath("//button[@title='edit']").eq(0).click({force:true}) //clicking edit icon of first index
    cy.scrollTo('top')

    //Edit user, Comment out those values which are not required to be edit
    //||  User Code  ||
    cy.xpath("//input[@name='userCode']").focus().clear().type(val.eUserCode).should('have.value',val.eUserCode)
    //||  User Name  ||
    cy.xpath("//input[@name='userName']").focus().clear().type(val.eUserName).should('have.value',val.eUserName)
    //||  Phone Number  ||
    cy.xpath("//input[@name='mobileNumber']").focus().clear().type(val.ePhnNo).should('have.value',val.ePhnNo)
    //||  Email  ||
    cy.xpath("//input[@name='emailAddress']").focus().clear().type(val.eEmail).should('have.value',val.eEmail)
    
    //||  Select Male "mGender" || 
    cy.xpath("//div[@class='card-body']//select").eq(0).select(val.mGender).contains(val.mGender)
    //||  Select Branch "eBranch" ||
    cy.xpath("//div[@class='card-body']//select").eq(1).select(val.eBranch).contains(val.eBranch)
    //||  Select Allow Payment yes/ no value  ||
    cy.xpath("//div[@class='card-body']//select").eq(2).select(val.no).contains(val.no)
    //||  Select Allow Purchase Share yes/ no value  ||
    cy.xpath("//div[@class='card-body']//select").eq(3).select(val.yes).contains(val.yes)
    //||  Select User Type branchUser,branchAdmin,superUser  ||
    cy.xpath("//div[@class='card-body']//select").eq(4).select(val.superUser).contains(val.superUser)
    cy.xpath("//div[@class='card-body']//select").eq(5).select(val.active).contains(val.active)
    //Submit Form
    //cy.xpath("//button[@type='submit']").click().wait(1000)

    /**______________________________________
      Search Newly added user
      uncomment below script only when submit
    */
   //  cy.xpath("//input[@aria-label='Search']").eq(1).focus().clear().type(val.eUserCode).should('have.value',val.eUserCode).wait(500)
   //  //changing username into upper case to match value in retrived data
   //  var userName = val.eUserName.toUpperCase(); 
   //  //verify for each value if added values is updated or not
   //  cy.xpath("//tbody[@class='MuiTableBody-root']").children()
   //    .should('contain',userName)
   //    .and('contain',val.eUserCode)
   //    .and('contain',val.eEmail)
   //    .and('contain',val.ePhnNo)
   //    .and('contain',val.superUser)
   //    .and('contain',val.mGender)
   //    .and('contain',val.eBranch)    
    
      
    })
    
  })
})