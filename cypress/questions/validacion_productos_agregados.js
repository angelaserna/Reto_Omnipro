const productos = require('../pages/carrito_page');

Cypress.Commands.add("productosCarrito", (producto)  => {
    cy.get(productos.productos_en_carrito).should("contains.text", producto)
})