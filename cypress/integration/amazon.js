
import {LoginPage} from "../pages/LoginPage"

const lp =new LoginPage()
it('LOGIN TEST',function(){

    lp.navigate('https://www.amazon.in')
    lp.enterusername('7009164133')
    lp.enterpassword("Gauravchi@12345")
})

it('Drop Down',function(){
    cy.wait(3000)
    cy.get('#twotabsearchtextbox').click().get('#searchDropdownBox').select('Electronics',{force: true})
    cy.get('#twotabsearchtextbox').type('Iphone 12{enter}')
    cy.get('span').contains('RESULTS').should('exist')
    cy.get('a[class=\'a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal').first().contains('Apple iPhone 12').should('exist')

}
)
it('Selecting First Result',function(){
    cy.get('a[class=\'a-link-normal s-underline-text s-underline-link-text s-link-style a-text-normal').first().invoke('removeAttr', 'target').click()


}
)
it('Add To Cart Button',function(){
    cy.get('#add-to-cart-button').click()
    cy.get('#a-autoid-0 > .a-button-inner > .a-button-input').click()
    cy.get('.a-truncate-cut').contains('iPhone 12').should('exist')

}
)
