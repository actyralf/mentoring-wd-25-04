const age = 15;
// Expressions, Statements, Operators

// Eine Expression ist ein Stück Code, das
// (durch Berechnung oder Auswertung (Evaluation)) zu einem Wert "evaluiert" werden kann
// Eine Expression macht alleine noch nichts, sie kann aber in Statements verwendet werden.
// Beispiele für Expressions:

// literal expressions:

("Ralf");
4;
4 + 6;
!(4 < 7);
// @ts-expect-error
4 === 7 || 5 > 3;
age > 17 ? "Du darfst wählen" : "Du darfst leider noch nicht wählen";

// Beispiel einer Funktion, die eine evaluierte Expression zurückgibt:

function isAdult(p: { name: string; age: number }): boolean {
  //   if (p.age > 17) {
  //     return true;
  //   } else {
  //     return false;
  //   }

  // Die Expression p.age > 17 EVALUIERT zu true oder false:
  return p.age > 17;
}

export {};
