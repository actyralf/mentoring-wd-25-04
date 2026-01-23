const numbers = [1, 3, 7, 4, 8, 3];

numbers.forEach((num, index) => {
  console.log("Das Element", num, "befindet sich an der Stelle", index);
});

// const foundIndex = numbers.findIndex((num) => {
//   if (num === 7) {
//     return true;
//   } else {
//     return false;
//   }
// });

// const foundIndex = numbers.findIndex((num) => {
//   return num === 7;
// });

const foundIndex = numbers.findIndex((num) => num === 7);

console.log("Element gefunden an Stelle:", foundIndex);

const sortedArray = numbers.toSorted((a, b) => b - a);

console.log(numbers);
console.log(sortedArray);

const students = [
  { id: 34, name: "Thomas", age: 60 },
  { id: 52, name: "Mela", age: 33 },
  { id: 87, name: "Ralf", age: 57 },
];

const foundStudent = students.find((student) => student.id === 52);

console.log(foundStudent);

const studentsYoungerThan60 = students.filter((student) => student.age < 60);
console.log(studentsYoungerThan60);

const studentsByAge = students.toSorted(
  (studentA, studentB) => studentB.age - studentA.age,
);

console.log(studentsByAge);

const doubledNumbers = numbers.map((number) => number * 2);
console.log(doubledNumbers);

const studentsHTML = students.map((student) => {
  return `
    <div>
        <h2>${student.name}</h2>
        <p>Age: ${student.age}</p>
    </div>
    `;
});

console.log(studentsHTML);

// const sortedNumbers = numbers.sort((a, b) => a - b);
// const filteredNumbers = numbers
//   .sort((a, b) => a - b)
//   .filter((number) => number < 5);
const filteredNumbersHTML = numbers
  .filter((number) => number < 5)
  .sort((a, b) => a - b)
  .map((number) => {
    return `
    <h2>${number}</h2>
    `;
  });

console.log(filteredNumbersHTML);
