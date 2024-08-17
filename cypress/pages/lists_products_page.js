require('cypress-xpath');
export const TITULO_LABEL = '.product_label';
export const BUTTON_CARRITO = '//div[@id="shopping_cart_container"]/a';
export const BUTTON_ELIMINAR_PRODUCTO = '//*[@id="cart_contents_container"]/div/div[1]/div[3]/div[2]/div[2]/button';
export const BUTTON_AGREGAR_PRODUCTO = (producto) => `//div[contains(text(), "${producto}")]/ancestor::div[contains(@class, 'inventory_item')]//button`;
export const BUTTON_CHECKOUT = '//*[@id="cart_contents_container"]/div/div[2]/a[2]';
export const BUTTON_CONTINUAR = '//*[@id="checkout_info_container"]/div/form/div[2]/input';
export const BUTTON_FINALIZAR = '//*[@id="checkout_summary_container"]/div/div[2]/div[8]/a[2]';
export const COMPRA_COMPLETADA = '.checkout_complete_container';