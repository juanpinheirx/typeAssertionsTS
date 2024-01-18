// type assertions and generics.

type Menu = 'drink' | 'food';

type Food = {
  name: string,
  type: Menu,
  price: number,
  calories: number,
}

type Drink = {
  name: string,
  type: Menu,
  price: number,
  isAlcoholic: boolean,
}

type Product = Food | Drink;

const plates: Product[] = [
  { name: 'Batata frita', type: 'food', price: 12, calories: 200 },
  { name: 'Coca', type: 'drink', price: 4, isAlcoholic: false },
]

function filterByType(type: Menu) {
  return plates.filter((prod) => prod.type === type)
}

const drinks = filterByType('drink') as Drink[];
const foods = filterByType('food') as Food[];

type Kind = 'even' | 'odd';

type Even = {
  first: string,
  second: string,
  third: string,
  kind: Kind,
}

type Odd = {
  first: string,
  second: string,
  third: string,
  kind: Kind,
}

const EvenNum: Even = {
  first: '0',
  second: '2',
  third: '4',
  kind: 'even',
}

const OddNum: Odd = {
  first: '1',
  second: '3',
  third: '5',
  kind: 'odd',
}

type evenOddNum = Even | Odd;

const allNumbers: evenOddNum[] = [EvenNum, OddNum];

function strToNumber(kind: Kind) {
  return allNumbers.filter(prod => prod.kind === kind);
}

const even = strToNumber('even') as Even[];

console.log(typeof even);

console.log(drinks, foods);

