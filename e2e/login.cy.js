describe('login test', () => {
beforeEach(() => {
  cy.visit('/en/users/sign_in')
})
  
  it('login with valid email and password', () => {
    cy.get('.page-title--h1').should('contain.text', 'Log in to your ZenHR account')
    cy.get('#user_login').type('tillawy@hotmail.com')
    cy.get('#user_password').type('password')
    cy.get('button[type="submit"]').click()
    cy.get('#flash_notice').should('exist')
    cy.get('#flash_notice').should('contain.text','Signed in successfully.')

  })

    it('logout test', () => {
      cy.get('.page-title--h1').should('contain.text', 'Log in to your ZenHR account')
      cy.get('#user_login').type('tillawy@hotmail.com')
      cy.get('#user_password').type('password')
      cy.get('button[type="submit"]').click()
      cy.get('#flash_notice').should('exist')
      cy.get('#flash_notice').should('contain.text','Signed in successfully.')
      cy.get('.grid-container__arrow').click()
      cy.get('.user-menu__title').contains('Logout').click()
      cy.location("pathname").should("equal","/en/logout")
      cy.get('h1').should("contain.text", "Going somewhere? Download ZenHR's Employee Self-Service (ESS) mobile app and stay connected on the go!")
    })
  })