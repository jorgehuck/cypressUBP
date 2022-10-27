class LoginLocators {
  constructor() {
    this.inputUser = "#loginFrm_loginname";
    this.inputPass = "#loginFrm_password";
    this.loginBtn = 'button[title="Login"]';
    this.alertBox = "div.alert";
  }
}

export default class Login {
  constructor(header) {
    this.header = header;
    this.locators = new LoginLocators();
  }

  login( username, pass ){
    
    this.header.getLoginRegisterButon().click();

    this.getUserInput().type(username);
    this.getPassInput().type(pass);
    this.getLoginBtn().click();
  }

  getUserInput() {
    return cy.get(this.locators.inputUser);
  }

  getPassInput() {
    return cy.get(this.locators.inputPass);
  }

  getLoginBtn() {
    return cy.get(this.locators.loginBtn);
  }

  getAlertBox() {
    return cy.get(this.locators.alertBox);
  }
}
