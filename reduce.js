const numbers = [5, 3, 7, 9, 2];

let sum = 0;

for (let i = 0; i < numbers.length; i++) {
  sum += numbers[i];
}

console.log(sum);

let result = numbers.reduce((acc, cur) => {
  return acc + cur;
}, 0);

let products = [
  { name: "shoes", category: "sports" },
  { name: "iPhone", category: "phones" },
  { name: "tennis racket", category: "sports" },
];

let categories = products.reduce((acc, cur) => {
  if (acc.includes(cur.category)) {
    return acc;
  } else {
    return [...acc, cur.category];
  }
}, []);

console.log(categories);
