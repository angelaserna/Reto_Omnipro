/// <reference types="cypress"/>
require('../tasks/autenticacion');
require('../tasks/agregar_producto');
require('../questions/validacion_productos_agregados');



describe('Screenplay con Cypress Version 2', () => {

    const productos = [
        'Sauce Labs Backpack',
        'Sauce Labs Bolt T-Shirt',
        'Sauce Labs Fleece Jacket'
    ]
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com/v1/index.html")
        cy.title().should('eq', 'Swag Labs')
        cy.loginInSaucedemo("standard_user", "secret_sauce")
    })

    it('Agregar al carrito', () =>{
        productos.forEach((seleccionadorProductos) => {
            cy.agregar_varios_productos(seleccionadorProductos)
        })
        cy.ir_al_carrito()
        productos.forEach((seleccionadorProductos) => {
            cy.get('.cart_item').each(($cart_item, index) => {
                const productoEsperado = productos[index]
                cy.wrap($cart_item).find('.inventory_item_name').should('contain.text', productoEsperado)
            })
        })
    }) 
})