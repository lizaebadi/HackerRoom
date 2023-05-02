import WallComputer from "./WallComputer";

describe("Wall Computer", () => {
  it("renders the heading", () => {
    cy.mount(<WallComputer />);
    
    cy.get('[data-cy="wallComputer-heading"]').should('have.text', 'Hello World');
  });

  it("renders the introduction", () => {
    cy.mount(<WallComputer />);
        
    cy.get('[data-cy="introduction"]').should('be.visible');
  });

  it("takes you to the challenge once spacebar is pressed", () => {
    cy.mount(<WallComputer />);
    cy.get("html").trigger("keydown", { key: " ", code: "Space" });

    cy.get('[data-cy="challenge-instructions"]').should("be.visible");
    cy.get('[data-cy="main-challenge"]').should("be.visible");
  }); 
});
