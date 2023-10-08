describe('Employee directory test', () => {
    beforeEach(() => {
      cy.visit('/en/users/sign_in')
    })
    it('Employee directory functionality tests', () => {
        cy.get('.page-title--h1').should('contain.text', 'Log in to your ZenHR account')
        cy.get('#user_login').type('tillawy@hotmail.com')
        cy.get('#user_password').type('password')
        cy.get('button[type="submit"]').click()
        cy.get('#flash_notice').should('exist')
        cy.get('#flash_notice').should('contain.text','Signed in successfully.')
        cy.get('span[class="am-toggle-left-sidebar__icon-bar"]').then($sidemenutoggle => {
          if($sidemenutoggle.is(':visible')) {
            console.log('the toggle is visible')
            cy.get($sidemenutoggle).click()
          }
        })
        cy.get('span[class="menu"]').contains('Employees').click()
    
        cy.get('a[href*="/en/employees/directory"]').click()
        cy.get('div').should('have.class', 'title').contains('Employee Directory').should('exist')
        cy.get('a[data-e2e="tab_B"]').click()
        cy.get('div[class="row"]').eq(1).children().not('hidden').should('have.length.greaterThan', 2)
        
      })
})