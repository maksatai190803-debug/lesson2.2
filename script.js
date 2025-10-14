var name = 'Maksatai';
var age = 22;
var city;

console.log( typeof city);
console.log(typeof name);
console.log(typeof age);
console.log(age / name);
console.log(name == city );
console.log(age == 22);
console.log('********************');

var input = Number(prompt("Введите сумму покупки ($):"));

if (input <= 1000) {
    console.log('у вас нет скидки');
    console.log('Итого к оплате:' + input + '$');
} else if (input >= 1000 && input <= 5000) {
    console.log('Скидка: 5%');
    var percent = Number((input * 5 /100));
} else if (input >= 5000 && input <= 10000) {
    console.log('Скидка: 10%');
    var percent = Number((input * 10 /100));
}else if (input >= 10000) {
    console.log('Скидка: 15%');
    var percent = Number((input * 15 /100));
}

console.log('Общая сумма покупки: ' + input + '$')
var sum = (input - percent);
console.log('Сумма со скидкой: ' + sum + '$');
