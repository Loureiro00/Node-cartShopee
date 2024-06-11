// Quais ações que o carrinho vai realizar

// casos de uso


//✅->Adicionar Item no carrinho
async function addItemToCart(userCart,item) {
    userCart.push(item);
}
//->deletar item no carrinho
async function deleteItemToCart(userCart,name) {
    const index = userCart.findIndex(item => item.name === name);
    if(index === -1) {
        return
    }
    userCart.splice(index,1)
}

//->remover um item- diminui o item
async function removeItemToCart(userCart,item){
    // encontrar o index do item
    const indexFound = userCart.findIndex((p => p.name === item.name));

    // caso nao encontre o item
    if (indexFound === -1) {
        console.log("Item nao encontrado")
        return
    }
    // item > 1 subtrair um item, item = 1 deletar o item
    // Diminuir a quantidade ou deletar o item
    if (userCart[indexFound].quantity > 1) {
        userCart[indexFound].quantity -= 1;
        userCart[indexFound].subtotal = () => userCart[indexFound].price * userCart[indexFound].quantity;
    } else if (userCart[indexFound].quantity === 1) {
        userCart.splice(indexFound, 1);
    }

    // caso item =1 delete o item
    if(userCart[indexFound].quantity === 1){
        userCart.splice(indexFound,1);
        return;
    }


}




async function displayCart(userCart) {
    console.log(`\nLista de compras :`)
    userCart.forEach((item,index) => {
        console.log(`${index + 1 } - ${item.name} - R$ ${item.price} - Quantidade: ${item.quantity}x - Subtotal = R$ ${item.subtotal()}`)
    })
}


//->calcular total do carrinho
async function calculateTotal(userCart) {
  
    const result = userCart.reduce((total,item) => total + item.subtotal(),0)
    console.log(`\n Total : ${result} 🛒 `)
}

export  {
    addItemToCart,
    deleteItemToCart,
    removeItemToCart,
    calculateTotal,
    displayCart,
  
}