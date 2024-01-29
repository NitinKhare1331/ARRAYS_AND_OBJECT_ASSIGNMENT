const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey'];
shoppingCart.unshift('Meat');
shoppingCart.push('Sugar');
delete shoppingCart[4];
shoppingCart.splice(3,1,'Green Tea')
console.log(shoppingCart);