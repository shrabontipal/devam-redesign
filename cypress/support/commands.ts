//

Cypress.Commands.add('getBySel', (selector: string, ...args) => {
  return cy.get(`[data-testid=${selector}]`, ...args);
});

Cypress.Commands.add('getByDataCy', (selector: string, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});

Cypress.Commands.add('formShouldBeValid', () => {
  cy.get('form').then($form => {
    expect($form[0].checkValidity()).to.be.true;
  });
});

Cypress.Commands.add('formShouldBeInvalid', () => {
  cy.get('form').then($form => {
    expect($form[0].checkValidity()).to.be.false;
  });
});

declare global {
  namespace Cypress {
    interface Chainable {
      getBySel(selector: string, ...args: any[]): Chainable<JQuery<HTMLElement>>;
      getByDataCy(selector: string, ...args: any[]): Chainable<JQuery<HTMLElement>>;
      formShouldBeValid(): Chainable<JQuery<HTMLElement>>;
      formShouldBeInvalid(): Chainable<JQuery<HTMLElement>>;
    }
  }
}

export {};
