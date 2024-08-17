const productos = require('../pages/carrito_page');

Cypress.Commands.add("productosCarritoVacio", (producto)  => {
    cy.get(productos.carrito_vacio).should('not.exist')
})