const productos = require('../pages/lists_products_page')
const info_cliente = require('../pages/info_cliente')

Cypress.Commands.add("agregar_producto", (producto) => {
    cy.xpath(productos.BUTTON_AGREGAR_PRODUCTO(producto)).click();
});

Cypress.Commands.add("agregar_varios_productos", (seleccionadorProducto) => {
    cy.xpath(productos.BUTTON_AGREGAR_PRODUCTO(seleccionadorProducto)).click();
});

Cypress.Commands.add("ir_al_carrito", () => {
    cy.xpath(productos.BUTTON_CARRITO).click();
});

Cypress.Commands.add("checkout", () => {
    cy.xpath(productos.BUTTON_CHECKOUT).click();
})

Cypress.Commands.add("informacion_checkout", (nombre, apellido, codigo_postal) => {
    cy.get(info_cliente.NOMBRE).type(nombre)
    cy.get(info_cliente.APELLIDO).type(apellido)
    cy.get(info_cliente.CODIGO_POSTAL).type(codigo_postal)
})

Cypress.Commands.add("continuar_compra", () => {
    cy.xpath(productos.BUTTON_CONTINUAR).click();
})

Cypress.Commands.add("verificar_costo", () => {
    let total_productos
    let impuesto
    let total_compra

    cy.get('.summary_subtotal_label').invoke('text').then((text) => {
        total_productos = parseFloat(text.replace('Item total: $', '').trim());
        cy.log("total productos: ", total_productos);
    });
    cy.get('.summary_tax_label').invoke('text').then((text) => {
        impuesto = parseFloat(text.replace('Tax: $', '').trim());
        cy.log("impuesto: ", impuesto);
    });
    cy.get('.summary_total_label').invoke('text').then((text) => {
        total_compra = parseFloat(text.replace('Total: $', '').trim());
        cy.log("total compra: ", total_compra);

        const calcularTotal = total_productos + impuesto;
        cy.log('Verificacion costo final: ', calcularTotal);
        expect(calcularTotal).to.equal(total_compra);
    });
})

Cypress.Commands.add("finalizar_compra", () => {
    cy.log('llego hasta aca')
    cy.xpath(productos.BUTTON_FINALIZAR).click();
    cy.log('dio click')
    cy.get(productos.COMPRA_COMPLETADA).should('contain.text', 'THANK YOU FOR YOUR ORDER')
})