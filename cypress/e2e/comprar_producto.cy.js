/// <reference types="cypress"/>
require('../tasks/autenticacion');
require('../tasks/agregar_producto');
require('../questions/validacion_productos_agregados');



describe('Screenplay con Cypress Version 2', () => {

    var producto="Sauce Labs Backpack"
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.title().should('eq', 'Swag Labs')
    })

    it('Agregar al carrito', () =>{
        cy.loginInSaucedemo("standard_user", "secret_sauce")
        cy.agregar_producto(producto)
        cy.ir_al_carrito()
        cy.checkout()
        cy.informacion_checkout("Pepito", "Perez", "050001")
        cy.continuar_compra()
        cy.verificar_costo()
        cy.finalizar_compra()
    })
})