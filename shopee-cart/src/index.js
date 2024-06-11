import * as cartService from "./services/cart.js";
import createItem from "./services/item.js";

const myCart= [];
const myWishList = [];

console.log(`Bem vindo ao seu carrinho de compras da Shopee`);


const item1 = await createItem("hotwheels ferrari", 20.99, 1);
const item2 = await createItem('hotwheels lamborghini', 39.99, 3);

//adicione 2 itens
await cartService.addItemToCart(myCart, item1);
await cartService.addItemToCart(myCart, item2);

await cartService.removeItemToCart(myCart, item2)

await cartService.displayCart(myCart)

//delete 2 itens
// await cartService.deleteItemToCart(myCart, item1.name);
// await cartService.deleteItemToCart(myCart, item2.name);
await cartService.calculateTotal(myCart)
