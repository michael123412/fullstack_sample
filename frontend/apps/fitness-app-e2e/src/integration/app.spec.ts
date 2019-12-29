import { getGreeting } from '../support/app.po';

describe('fitness-app', () => {
  beforeEach(() => cy.visit('/'));

  it('should display welcome message', () => {
    getGreeting().contains('Welcome to fitness-app!');
  });
});
