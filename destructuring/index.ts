// Destructuring

type Person = {
  name: string;
  age?: number;
  hobbies: string[];
  address: {
    city: string;
  };
  creditCard?: string;
};

type Product = {
  name: string;
  price: number;
};

const ralf: Person = {
  name: "Ralf",
  age: 57,
  hobbies: ["piano", "chess"],
  address: {
    city: "Bonn",
  },
};

const product: Product = {
  name: "Socken",
  price: 12,
};

function printPerson({ name, age }: Person): void {
  // const { name, age } = person;
  // const firstName = person.firstName;
  // const lastName = person.lastName;
  // const age = person.age;

  console.log(name);
  console.log("Alter: " + age);

  console.log(name + " hat " + name + " gekauft");
}

// alias:

const { age: personAge } = ralf;

// default value und nested properties:

const {
  address: { city = "Unbekannte Stadt" },
} = ralf;

printPerson(ralf);

// Destructuring funktioniert auch mit Arrays, wird aber sehr selten angewendet:

const students = ["Mela", "Imke", "Thomas", "Angela", "Jessica"];

// const student1 = students[0];
// const student2 = students[1];
// const student3 = students[2];

const [student1, student2, student3] = students;

console.log(student1);
console.log(student2);
console.log(student3);

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

const modifiedRalf = {
  age: 47,
  ...ralf,
};

console.log(modifiedRalf);

// Achtung Fallstrick: Das geht NICHT! (Reference Type)
// const ralfWithCreditCard = ralf;
// ralfWithCreditCard.creditCard = "123456";
// ralfWithCreditCard und ralf "zeigen" auf das gleiche Objekt!

console.log(ralfWithCreditCard);
console.log(ralf);

function Card(userStyle: any) {
  const style = {
    backgroundColor: "red",
    width: 100,
    height: 100,
  };

  const combinedStyle = {
    ...style,
    ...userStyle,
  };

  // {
  //    backgroundColor: "red",
  //   width: 50,
  //   height: 100,
  // }

  // render div with some styles
  // <div style={style}>...</div>
}

Card({ width: 50 });

// Rest operator (...)

const extendedRalf = { ...ralf, car: "Volvo" };

const { creditCard, ...ralfWithoutCreditCard } = ralfWithCreditCard;
const { age, hobbies, ...ralfWithoutAge } = ralfWithCreditCard;

console.log(ralfWithoutCreditCard);
console.log(ralfWithoutAge);

// type int_or_str = { int:number} | { str: string};
// function f( {int}: int_or_str){ /* body */}
// function f( {str}: int_or_str){ /* body */}

console.log(4);
console.log("4");

function addTwoNumbers(a: string | number, b: string | number): number {
  let valueA;
  let valueB;
  if (typeof a === "string") {
    valueA = Number(a);
  } else {
    valueA = a;
  }
  if (typeof b === "string") {
    valueB = Number(b);
  } else {
    valueB = b;
  }
  return valueA + valueB;
}

console.log(4 + 5);
console.log("4" + "5");

console.log(addTwoNumbers(4, 5));
console.log(addTwoNumbers("4", "5"));
