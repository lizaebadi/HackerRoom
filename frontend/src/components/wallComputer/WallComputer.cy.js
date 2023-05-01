import WallComputer from "./WallComputer";

describe("Wall Computer", () => {
  it("renders the heading", () => {
    cy.mount(<WallComputer />);
    
    cy.get('[data-cy="wallComputer-heading"]').should('have.text', 'Hello World');
  });
});
