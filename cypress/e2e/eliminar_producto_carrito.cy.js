/// <reference types="cypress"/>
require('../tasks/autenticacion');
require('../tasks/agregar_producto');
require('../tasks/eliminar_producto_carrito');
require('../questions/validacion_productos_eliminado.js');



describe('Screenplay con Cypress Version 2', () => {

    var produto="Sauce Labs Backpack"
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.title().should('eq', 'Swag Labs')
    })

    it('Eliminar producto carrito', () =>{
        cy.loginInSaucedemo("standard_user", "secret_sauce")
        cy.agregar_producto(produto)
        cy.ir_al_carrito()
        cy.eliminar_producto(produto)
        cy.productosCarritoVacio(produto)
    })
})