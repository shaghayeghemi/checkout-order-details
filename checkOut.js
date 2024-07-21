const itemPrice1 = 10;
const itemPrice2 = 15;
const itemPrice3 = 18;

const balance = 60;
const totalPrice = itemPrice1 + itemPrice3 * 2 + itemPrice2;
console.log("your Total price =", totalPrice);
const avrgePrice = totalPrice / 4;
console.log("your avrge price is =", avrgePrice);
const finalPrice = totalPrice * 0.95;
console.log("your final price is =", finalPrice);
const canBuy = balance >= finalPrice ? "you can buy" : "you cant buy";
console.log(canBuy);
