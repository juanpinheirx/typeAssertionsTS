"use strict";
// type assertions and generics.
const plates = [
    { name: 'Batata frita', type: 'food', price: 12, calories: 200 },
    { name: 'Coca', type: 'drink', price: 4, isAlcoholic: false },
];
function filterByType(type) {
    return plates.filter((prod) => prod.type === type);
}
const drinks = filterByType('drink');
const foods = filterByType('food');
const EvenNum = {
    first: '0',
    second: '2',
    third: '4',
    kind: 'even',
};
const OddNum = {
    first: '1',
    second: '3',
    third: '5',
    kind: 'odd',
};
const allNumbers = [EvenNum, OddNum];
function strToNumber(kind) {
    return allNumbers.filter(prod => prod.kind === kind);
}
const even = strToNumber('even');
console.log(typeof even);
console.log(drinks, foods);
