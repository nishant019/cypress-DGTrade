const { login } = require("../support/commands")
describe('Client Module-> Client Info', () => {
  // it('Checking filter', () => {
  //   login()
  //   cy.visit('/setup/client')
  //   cy.xpath('//select').eq(0).select('10000').contains('10000') //data limit
  //   cy.xpath('//select').eq(1).select('Individual').contains('Individual') //client type
  //   cy.xpath('//select').eq(2).select('PKR').contains('PKR') //Branch
  // })
  it('Client module-> Client Info Add new User',()=>{
    login()
    //visit client page
    cy.visit('/setup/client').wait(900)
    //filter data limit
    cy.xpath('//select').eq(1).select('ALL').contains('ALL')
    //filter client to be edited
    cy.xpath(`//input[@name='name']`).type('NISHANT POUDEL')
    //click search button
    cy.xpath(`//span[@class='mr-3']`).eq(2).click()
    //click edit icon from table
    cy.get('.MuiSvgIcon-root.mr-2.pointer').eq(1).click().wait(500)
    //---Goes to edit page
    //Registration Date
    // cy.xpath("//div[@class='card-body']//input[@class='_1oYOS FormGroup__calendar disabled']").eq(0).click()
    //   .xpath("//div[@class='_1hh2I _3Rbbx']").contains('20').click()
    // //Parent Account , selecting first value
    // cy.xpath(`//span[@class='rw-dropdown-list-value']`).type('Ram{downarrow}')
    //   cy.xpath(`//div[@class='rw-list-option']`).eq(0).click()
    // //--------
    // //Referer name
    // cy.xpath(`//select`).eq(1).select('Age Nt')
    // //Refer Date
    // cy.xpath("//div[@class='card-body']//input[@class='_1oYOS FormGroup__calendar disabled']").eq(1).click()
    //   .xpath("//div[@class='_1hh2I _3Rbbx']").contains('20').click()
    // //client category
    // cy.xpath(`//select`).eq(2).select('Notable')
    // //Risk Category
    // cy.xpath(`//select`).eq(3).select('Low Risk')
    // //Trade Type
    //cy.xpath(`//select`).eq(4).select('-- select --')//.select('ONLINE')
    // //Employee Assigned , select first value
    // cy.xpath(`//select`).eq(5).select(1)
    //Branch
    cy.xpath(`//select`).eq(6).select('POKHARA BRANCH')
    // //Nepse code
    // cy.xpath(`//input[@name='nepseCode']`)
    //   .clear()
    // //client name
    // cy.xpath(`//input[@name='clientName']`)
    //   .clear()
    // //नाम
    //   cy.xpath(`//input[@name='clientNameNepali']`)
    //   .clear()
    //   .type('निशान पौडेल')
    // //DOB
    // cy.xpath("//div[@class='card-body']//input[@class='_1oYOS FormGroup__calendar disabled']").eq(2).click()
    //   .xpath(`//select[@class='_2aNF9']`).eq(1).select('2055')
    //   .xpath("//div[@class='_1hh2I _3Rbbx']").contains('20').click()
    // //Nationality
    // cy.xpath(`//div[@class='FormGroup__asyncSelect rw-combobox rw-widget']`).type('Nepal{enter}')
    // //Gender
    // cy.xpath(`//input[@name='gender']`).check('MALE',{force:true})
    // //Citizenship no
    // cy.xpath(`//input[@name='citizenshipNo']`).type('112266595928466')
    // //Issue District
    // cy.xpath(`//input[@name='issueDistrict']`).type('Kathmnadu')
    // //Issue Date(B.S)
    // cy.xpath("//div[@class='card-body']//input[@class='_1oYOS FormGroup__calendar disabled']").eq(3).click().wait(500)
    //   .xpath(`//select[@class='_2aNF9']`).eq(1).select('2075')
    //   .xpath("//div[@class='_1hh2I _3Rbbx']").contains('20').click()
    // //----
    // //Registration number
    // cy.xpath("//input[@name='regNo']").type('11223344556678')
    // //Involvement in other investment companies 
    // cy.xpath("//input[@name='isIOIC']").check()
  })

})