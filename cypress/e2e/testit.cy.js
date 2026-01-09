describe('Testit sovellus', function () {

  beforeEach(function () {
      cy.visit('http://localhost:3000')
  })

  it('Sivu avautuu ja näyttää datarivejä', function () {
      cy.visit('http://localhost:3000')
      cy.contains('Customers')
      cy.contains('OSP') // jos on saatu dataa kannasta
      cy.contains('poista') // jos on saatu dataa kannasta
      cy.contains('Tässä projektissa harjoitellaan web sovellusten testausta')
  })

  })