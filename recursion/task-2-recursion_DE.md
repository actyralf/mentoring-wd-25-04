# Aufgabe 2

Diese Übung dient dazu, Rekursion zu üben.

Die Aufgabe soll dir helfen zu verstehen, wie man eine baumartige Struktur mit Rekursion durchläuft. Baumartige Strukturen sind überraschend häufig, zum Beispiel im DOM einer Webseite, in Dateisystemen, Stammbäumen, Besitzstrukturen von Unternehmen, Abteilungen von Unternehmen und Mitarbeiterbäumen und so weiter.

Zuerst untersuche die Dateien `main.js` und `pathfinder.js`.

Deine Aufgabe ist es, den Inhalt von `pathfinder.js` zu erstellen, sodass `main.js` wie erwartet funktioniert. Bearbeite `main.js` überhaupt nicht. Die erwartete Ausgabe beim Ausführen von `main.js` im Terminal sind:

```
$ node main.js
Path to the first button element: html > body > header > div > button
Path to the first NavLink element: html > body > header > div > nav > NavLink
Path to the first li element: html > body > footer > div > ul > li

HTML tree:
html
  body
    header
      div
        button
      div
        nav
          NavLink
          NavLink
          NavLink
    main
      h1
      p
      p
      p
    footer
      div
        ul
          li
          li
          li
        div
          ul
            li
            li
            li
```

Um diese Aufgabe zu lösen, musst du eine rekursive Funktion in `pathfinder.js` implementieren, die durch den Baum navigiert und den Pfad zu spezifischen Elementen findet. Hier ist ein Beispiel, wie du beginnen könntest:

```javascript
function findPath(element, target) {
  // Basisfall: Wenn das aktuelle Element das Ziel ist
  if (element.tagName === target) {
    return element.tagName;
  }

  // Rekursiver Fall: Durchlaufe die Kinder des aktuellen Elements
  for (let child of element.children) {
    let path = findPath(child, target);
    if (path) {
      return element.tagName + " > " + path;
    }
  }

  // Wenn das Ziel in keinem Kind gefunden wurde
  return null;
}
```

Diese Funktion nimmt ein Element und ein Ziel-Tag als Argumente und gibt den Pfad als String zurück, wenn das Ziel gefunden wird, oder `null`, wenn es nicht gefunden wird. Du musst diese Funktion in `pathfinder.js` implementieren und sicherstellen, dass sie korrekt mit `main.js` interagiert.
