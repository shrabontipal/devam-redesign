describe('Contact Form', () => {
  beforeEach(() => {
    cy.visit('/contact');
  });
  
  it('shows validation errors for empty fields', () => {
    cy.get('[data-testid="submit-button"]').click();
    
    cy.contains('Name must be at least 2 characters').should('be.visible');
    cy.contains('Please enter a valid email address').should('be.visible');
    cy.contains('Please enter a valid phone number').should('be.visible');
    cy.contains('Message must be at least 5 characters').should('be.visible');
  });
  
  it('shows validation error for invalid email', () => {
    cy.get('[data-testid="input-name"]').type('Test User');
    
    cy.get('[data-testid="input-phone"]').type('1234567890');
    
    cy.get('[data-testid="input-message"]').type('This is a test message');
    
    cy.get('[data-testid="input-email"]').type('invalid-email');
    
    cy.get('[data-testid="submit-button"]').click();
    
    cy.contains('Please enter a valid email address').should('be.visible');
  });
  
  it('shows validation error for invalid phone number', () => {
    cy.get('[data-testid="input-name"]').type('Test User');
    
    cy.get('[data-testid="input-email"]').type('test@example.com');
    
    cy.get('[data-testid="input-message"]').type('This is a test message');
    
    cy.get('[data-testid="input-phone"]').type('invalid');
    
    cy.get('[data-testid="submit-button"]').click();
    
    cy.contains('Please enter a valid phone number').should('be.visible');
  });
  
  it('submits form successfully', () => {
    cy.intercept('POST', '**/api/v1.0/email/send*', {
      statusCode: 200,
      body: { success: true }
    }).as('emailSubmit');
    
    cy.get('[data-testid="input-name"]').type('Test User');
    cy.get('[data-testid="input-email"]').type('test@example.com');
    cy.get('[data-testid="input-phone"]').type('1234567890');
    cy.get('[data-testid="input-message"]').type('This is a test message');
    
    cy.get('[data-testid="submit-button"]').click();
    
    cy.contains('Sending...').should('be.visible');
    
    cy.wait('@emailSubmit');
    
    cy.contains('Message sent successfully').should('be.visible');
    
    cy.get('[data-testid="input-name"]').should('have.value', '');
    cy.get('[data-testid="input-email"]').should('have.value', '');
    cy.get('[data-testid="input-phone"]').should('have.value', '');
    cy.get('[data-testid="input-message"]').should('have.value', '');
  });
});
