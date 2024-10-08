/// <reference types="cypress"/>
const autenticacion = require('../tasks/autenticacion');
const validacion = require('../questions/validacion_login')


describe('Screenplay con Cypress Version 2', () => {

    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.title().should('eq', 'Swag Labs')
    })

    it('Autenticación exitosa con Screenplay Version 2', () =>{
        cy.loginInSaucedemo("standard_user", "secret_sauce")
        cy.loginExitoso()
    })
})