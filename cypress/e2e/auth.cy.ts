describe('Authentication', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should open auth modal when clicking sign in button', () => {
    cy.contains('button', 'Sign In').click();
    cy.contains('h2', 'Sign In').should('be.visible');
  });

  it('should switch between sign in and sign up forms', () => {
    cy.contains('button', 'Sign In').click();
    cy.contains('button', "Don't have an account? Sign up").click();
    cy.contains('h2', 'Create Account').should('be.visible');
  });

  it('should show validation errors for empty form submission', () => {
    cy.contains('button', 'Sign In').click();
    cy.get('form').submit();
    cy.get('input:invalid').should('have.length', 2);
  });
});