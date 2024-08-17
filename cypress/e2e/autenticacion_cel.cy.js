/// <reference types="cypress"/>
const autenticacion = require('../tasks/autenticacion');
const validacion = require('../questions/validacion_login')


describe('Prueba en vista movil', () => {

    before(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.viewport('iphone-x')
        //cy.title().should('eq', 'Swag Labs')
    })

    it('Autenticación exitosa en dispositivo movil', () =>{
        cy.loginInSaucedemo("standard_user", "secret_sauce")
        cy.loginExitoso()
    })
})