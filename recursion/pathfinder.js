export function findPathToFirstMatch(elements, tag) {
  const element = elements.find((e) => e.tag === tag);
  const path = createPathRecursive(elements, element.id, []);
  return path.join(" / ");
}

function createPathRecursive(elements, elementId, path) {
  const element = elements.find((e) => e.id === elementId);
  const newPath = [element.tag, ...path];
  // Abbruchbedingung: Wir sind an der Root angekommen
  if (!element.parent) {
    return newPath;
  }
  return createPathRecursive(elements, element.parent, newPath);
}

["html", "body", "header", "div", "button"];

export function printDomTree(elements) {
  // Root element finden
  // Element printen
  // Alle Kinder finden
  // Jedes Kind printen => Für jedes Kind wieder alle Kinder finden und printen
  const root = elements.find((e) => e.parent === null);
  printElementWithChildrenRecursive(elements, root, 0);
}

function printElementWithChildrenRecursive(elements, element, level) {
  console.log("  ".repeat(level), element.tag);

  const children = elements.filter((e) => e.parent === element.id);
  // Abbruchbedingung: Das Element hat keine Kinder
  if (children.length === 0) {
    return;
  }
  for (const child of children) {
    printElementWithChildrenRecursive(elements, child, level + 1);
  }
}
