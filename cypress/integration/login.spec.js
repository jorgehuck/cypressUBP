/// <reference types="cypress" />
import HeaderPage from "../pages/header.js";
import LoginPage from "../pages/login.js";

const URL = "https://automationteststore.com/";

describe("Testing login", () => {
  const header = new HeaderPage();
  const login = new LoginPage(header);

  beforeEach(() => {
    cy.visit(URL);
  });

  it("Login fail - :(", () => {

    login.login('usuario', 'clave')
    
    login
      .getAlertBox()
      .should("contain.text", "Error: Incorrect login or password provided.");
  });

  /* --- */

  it("Visual testing de Login", () => {
    header.getLoginRegisterButon().click();
    login.getUserInput().should("have.css", "border-bottom-left-radius", "0px");
  });

  /* --- */

  it("Login OK", () => {
    login.login("agus2", "automation2");
  });
});
