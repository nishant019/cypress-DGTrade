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
    cy.visit('/setup/client').wait(900)
    cy.xpath("//div[@role='button']").contains('Add New Client').click({force:true}) //opens Add new user Modal
    cy.xpath("//div[@class='modal-content']").should('be.visible')
    cy.xpath("//div[@class='modal-content']//input[@class='_1oYOS FormGroup__calendar disabled']").click()
      .xpath("//div[@class='_1hh2I _3Rbbx']").contains('20').click()
    cy.xpath("//div[@class='modal-body']//select").eq(1).select('H-O')
    cy.xpath("//div[@class='modal-body']//select").eq(2).select('Individual')
    cy.xpath("//div[@class='modal-body']//input[@name='nepseCode']").type('1122334455678')
    cy.xpath("//div[@class='modal-body']//input[@name='clientName']").type('Nishant Test Client')
    var dp = 10100;
    cy.xpath("//span[@class='rw-dropdown-list-value']").click()
      .xpath("//div[@class='rw-popup-container']").contains(dp).click()//.select('H-O')
    cy.xpath("//div[@class='modal-body']//input[@name='boid']").type('130'+dp+'12345678')
    cy.xpath("//div[@class='modal-body']//input[@name='email']").type('np@gm.com')
    cy.xpath("//div[@class='modal-body']//input[@name='mobileNo']").type('9860476245')
    cy.xpath("//div[@class='modal-body']//select").eq(3).select('Luxury')
    cy.xpath("//div[@class='modal-body']//select").eq(4).select('High Risk')

  })

})