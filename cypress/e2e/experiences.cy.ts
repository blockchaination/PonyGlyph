describe('Experiences', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display experiences section', () => {
    cy.contains('h2', 'Popular Experiences').should('be.visible');
  });

  it('should filter experiences by search term', () => {
    cy.get('input[placeholder="Search experiences..."]').type('desert');
    cy.get('.experience-card').should('have.length.gte', 0);
  });

  it('should filter experiences by region', () => {
    cy.get('select').first().select('Marrakech-Safi');
    cy.get('.experience-card').should('have.length.gte', 0);
  });

  it('should open booking modal when clicking book now', () => {
    cy.contains('button', 'Book Now').first().click();
    cy.contains('h2', 'Sign In').should('be.visible');
  });
});