describe('Navigation', () => {
  beforeEach(() => {
    cy.visit('/');
  });
  
  it('navigates to about page', () => {
    cy.get('[data-testid="nav-about"]').click();
    cy.url().should('include', '/about');
    cy.contains('Our Story').should('be.visible');
  });
  
  it('navigates to courses page', () => {
    cy.get('[data-testid="nav-courses"]').click();
    cy.url().should('include', '/courses');
    cy.contains('Our Programs').should('be.visible');
  });
  
  it('navigates to blog page', () => {
    cy.get('[data-testid="nav-blog"]').click();
    cy.url().should('include', '/blog');
    cy.contains('Latest Articles').should('be.visible');
  });
  
  it('navigates to contact page', () => {
    cy.get('[data-testid="nav-contact"]').click();
    cy.url().should('include', '/contact');
    cy.contains('Get in Touch').should('be.visible');
  });
  
  it('mobile navigation works', () => {
    cy.viewport('iphone-6');
    
    cy.get('[data-testid="mobile-menu"]').should('not.be.visible');
    
    cy.get('[data-testid="burger-icon"]').click();
    
    cy.get('[data-testid="mobile-menu"]').should('be.visible');
    
    cy.get('[data-testid="mobile-menu"]').contains('About').click();
    cy.url().should('include', '/about');
    cy.contains('Our Story').should('be.visible');
    
    cy.visit('/');
    cy.viewport('iphone-6');
    cy.get('[data-testid="burger-icon"]').click();
    cy.get('[data-testid="mobile-menu"]').contains('Courses').click();
    cy.url().should('include', '/courses');
    cy.contains('Our Programs').should('be.visible');
  });
  
  it('get started button navigates to contact page', () => {
    cy.get('[data-testid="get-started-btn"]').click();
    cy.url().should('include', '/contact');
    cy.contains('Get in Touch').should('be.visible');
  });
});
