// Destructuring

type Person = {
  firstName: string;
  lastName: string;
  age: number;
  hobbies: string[];
  address: {
    city: string;
  };
  creditCard?: string;
};

const ralf: Person = {
  firstName: "Ralf",
  lastName: "Siewert",
  age: 57,
  hobbies: ["piano", "chess"],
  address: {
    city: "Bonn",
  },
};

function printPerson({ firstName, lastName, age }: Person): void {
  console.log(firstName + " " + lastName);
  console.log("Alter: " + age);
}

// Destructuring funktioniert auch mit Arrays, wird aber sehr selten angewendet:

const students = ["Mela", "Imke", "Thomas", "Angela", "Jessica"];

// const student1 = students[0];
// const student2 = students[1];
// const student3 = students[2];

const [student1, student2, student3] = students;

console.log(student1);
console.log(student2);
console.log(student3);

printPerson(ralf);

// Spread operator (...)

// Neues Objekt mit zusätzlichen Infos erzeugen

// OHNE Spread Operator:

// const ralfWithCreditCard = {
//   firstName: ralf.firstName,
//   lastName: ralf.lastName,
//   age: ralf.age,
//   hobbies: ralf.hobbies,
//   address: ralf.address,
//   creditCard: "12345678",
// };

// MIT Spread Operator:

const ralfWithCreditCard = {
  ...ralf,
  creditCard: "123456",
};

// Achtung Fallstrick: Das geht NICHT! (Reference Type)
// const ralfWithCreditCard = ralf;
// ralfWithCreditCard.creditCard = "123456";
// ralfWithCreditCard und ralf "zeigen" auf das gleiche Objekt!

console.log(ralfWithCreditCard);
console.log(ralf);

// Rest operator (...)
