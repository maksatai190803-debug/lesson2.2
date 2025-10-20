// var name = 'Maksatai';
// var age = 22;
// var city;

// console.log( typeof city);
// console.log(typeof name);
// console.log(typeof age);
// console.log(age / name);
// console.log(name == city );
// console.log(age == 22);
// console.log('********************');

// var input = Number(prompt("Введите сумму покупки ($):"));

// if (input <= 1000) {
//     console.log('у вас нет скидки');
//     console.log('Итого к оплате:' + input + '$');
// } else if (input >= 1000 && input <= 5000) {
//     console.log('Скидка: 5%');
//     var percent = Number((input * 5 /100));
// } else if (input >= 5000 && input <= 10000) {
//     console.log('Скидка: 10%');
//     var percent = Number((input * 10 /100));
// }else if (input >= 10000) {
//     console.log('Скидка: 15%');
//     var percent = Number((input * 15 /100));
// }

// console.log('Общая сумма покупки: ' + input + '$')
// var sum = (input - percent);
// console.log('Сумма со скидкой: ' + sum + '$');

const orders = [
 {
   id: 1,
   customer: "Jhon",
   items: [
     {
       name: "Ноутбук",
       price: 50000,
       quantity: 1,
     },
     {
       name: "Мышь",
       price: 1500,
       quantity: 2,
     },
   ],
 },
 {
   id: 2,
   customer: "Alan",
   items: [
     {
       name: "Телефон",
       price: 30000,
       quantity: 1,
     },
     {
       name: "Чехол",
       price: 1000,
       quantity: 3,
     },
   ],
 },
 {
   id: 3,
   customer: "Jane",
   items: [
     {
       name: "Клавиатура",
       price: 2500,
       quantity: 1,
     },
     {
       name: "Монитор",
       price: 12000,
       quantity: 1,
     },
   ],
 },
]; 

console.log("Сумма каждого заказа:");
for (var i = 0; i < orders.length; i++) {
  var order = orders[i];         
  var total = 0;                 
  
  for (var j = 0; j < order.items.length; j++) {
    var item = order.items[j];
    total += item.price * item.quantity;
  }
  
  order.total = total;
  console.log(`${order.customer} — ${total} руб.`);
}

var totalIncome = 0;
for (var i = 0; i < orders.length; i++) {
  totalIncome += orders[i].total;
}
console.log(`\nОбщий доход магазина: ${totalIncome} руб.`);

var maxOrder = orders[0];
for (var i = 1; i < orders.length; i++) {
  if (orders[i].total > maxOrder.total) {
    maxOrder = orders[i];
  }
}
console.log(`\nСамый дорогой заказ сделал(а): ${maxOrder.customer} (${maxOrder.total} руб.)`);

var products = {};

for (var i = 0; i < orders.length; i++) {
  for (var j = 0; j < orders[i].items.length; j++) {
    var item = orders[i].items[j];
    
    if (products[item.name]) {
      products[item.name] += item.quantity;
    } else {
      products[item.name] = item.quantity;
    }
  }
}

console.log("\nСписок всех проданных товаров:");
for (var name in products) {
  console.log(`${name}: ${products[name]} шт.`);
}


var popularName = null;
var maxCount = 0;

for (var name in products) {
  if (products[name] > maxCount) {
    maxCount = products[name];
    popularName = name;
  }
}

console.log(`\nСамый популярный товар: ${popularName} (${maxCount} шт.)`);
