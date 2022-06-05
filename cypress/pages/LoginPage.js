export class LoginPage{
    navigate(url){
        cy.visit(url)
        cy.get('#nav-link-accountList').click()

    }

    enterusername(username){
        cy.get('#ap_email').type(username)
        cy.get('.a-button-inner > #continue').click()

    }
    enterpassword(pass){
        cy.get('#ap_password').type(pass)
        cy.get('#signInSubmit').click()

    }

}