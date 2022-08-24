describe('Pokedex', function() {
  it('front page can be opened', function() {
    cy.visit('http://localhost:5000/', {
      timeout: 120e3  // first opening seems very slow, setting timeout to max
    })
    cy.contains('ivysaur')
    cy.contains('Pokémon and Pokémon character names are trademarks of Nintendo.')
  })
})
describe('Single pokemon view', function() {
  it('can be opened', function() {
    cy.visit('http://localhost:5000')
    cy.contains('ivysaur').click()
    cy.contains('chlorophyll')
  })
})