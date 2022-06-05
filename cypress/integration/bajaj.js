it('Search Bajaj Finserv Health on google',function(){
    cy.visit('https://www.google.com')
    cy.get('.gLFyf').type('Bajaj FInserv Health Limited{Enter}')
})

it('Open Bajaj Finserv Health',function(){
    cy.wait(3000)
    cy.get(':nth-child(1) > .g > .jtfYYd > .jGGQ5e > .yuRUbf > a > .TbwUpd > .iUh30').click();
    
})

it('Search Doctor',function(){
cy.get('#searchBarInput').type('Doctor{Enter}')
cy.wait(3000)
cy.scrollTo(0, 500)
cy.get('button').contains('Book Appointment').first().click()
})

it('Select Slot',function(){
    cy.wait(2000)
    cy.get('div[class=slotTimeContainer]').find('span[class=MuiButton-label]').first().then(function(text1){
         cy.get('div[class=slotTimeContainer]').find('span[class=MuiButton-label]').first().click()

         cy.get('[data-testid="appointment-time"]').invoke('text').then((text2) => {
            expect(text2).to.eq(text1.text())
    
        })

    })
    
})
