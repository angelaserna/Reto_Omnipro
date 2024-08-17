const productos = require('../pages/lists_products_page')

Cypress.Commands.add("eliminar_producto", (producto) => {
    cy.xpath(productos.BUTTON_ELIMINAR_PRODUCTO).click();
})