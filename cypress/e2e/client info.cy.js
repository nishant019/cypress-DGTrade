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
    cy.visit('/setup/client')
    cy.xpath("//div[@role='button']").contains('Add New Client').click({force:true}) //opens Add new user Modal
    cy.xpath("//div[@class='modal-content']").should('be.visible')
    cy.xpath("//input[@class='_1oYOS FormGroup__calendar']").click()
      .xpath("//div[@class='_1hh2I _3Rbbx']").contains('20').click()
    cy.xpath("//div[@class='modal-body']//select").eq(0).select('H-O')
    cy.xpath("//div[@class='modal-body']//select").eq(1).select('Individual')
    cy.xpath("//div[@class='modal-body']//input[@name='nepseCode']").type('1122334455678')
  })

})