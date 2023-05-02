import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import WallComputer from "./WallComputer";

describe("Wall Computer", () => {
  it("renders the heading", () => {
    render(
      <BrowserRouter>
        <WallComputer />
      </BrowserRouter>
    );

    cy.get('[data-cy="wallComputer-heading"]').should('have.text', 'Hello World');
  });

  it("renders the introduction", () => {
    render(
      <BrowserRouter>
        <WallComputer />
      </BrowserRouter>
    );     

    cy.get('[data-cy="introduction"]').should('be.visible');
  });

  it("takes you to the challenge once spacebar is pressed", () => {
    render(
      <BrowserRouter>
        <WallComputer />
      </BrowserRouter>
    );
        cy.get("html").trigger("keydown", { key: " ", code: "Space" });

    cy.get('[data-cy="challenge-instructions"]').should("be.visible");
    cy.get('[data-cy="main-challenge"]').should("be.visible");
  }); 

  it("takes you to the outro when spacebar is pressed", () => {
    render(
      <BrowserRouter>
        <WallComputer />
      </BrowserRouter>
    );
    cy.get("html").trigger("keydown", { key: " ", code: "Space" });
    cy.get("html").trigger("keydown", { key: " ", code: "Space" });

    cy.get('[data-cy="outro-heading"]').should("be.visible");
    cy.get('[data-cy="outro-body"]').should("be.visible");
  })

  it("exits the game when escape is pressed initially", () => {
    render(
      <BrowserRouter>
        <WallComputer />
      </BrowserRouter>
    );

    cy.get("html").trigger("keydown", { key: " ", code: "Escape" });
    cy.url().should("include", "/game");
  });
});