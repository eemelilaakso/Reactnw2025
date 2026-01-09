describe('Testit sovellus', function () {

  beforeEach(function () {
      cy.visit('http://localhost:3000')
  })

  it('Sivu avautuu ja näyttää datarivejä', function () {
      cy.visit('http://localhost:3000')
      
      cy.contains('Laskuri')
      cy.contains('Customers')
      cy.contains('Northwind Traders')
      cy.contains('Tässä projektissa harjoitellaan web sovellusten testausta') //Ei löydy
  })

  })