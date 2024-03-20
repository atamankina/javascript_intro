# Javascript Intro

### Einführung in `if`, `else if` und `else` Anweisungen

#### Die `if` Anweisung
Eine `if` Anweisung überprüft eine Bedingung. Wenn die Bedingung `true` (wahr) ergibt, wird der Codeblock innerhalb der `if` Anweisung ausgeführt.

**Syntax:**

```javascript
if (Bedingung) {
  // Code, der ausgeführt wird, wenn die Bedingung wahr ist
}
```

### Die `else` Anweisung

**Syntax:**

```javascript
if (Bedingung) {
  // Code, der ausgeführt wird, wenn die Bedingung wahr ist
} else {
  // Code, der ausgeführt wird, wenn die Bedingung falsch ist
}
```

### Die `else if` Anweisung

Für mehrere Bedingungen in Folge können Sie `else if` verwenden, um zusätzliche Überprüfungen durchzuführen, bevor Sie zu `else` gelangen.

**Syntax:**

```javascript
if (Bedingung1) {
  // Code, der ausgeführt wird, wenn Bedingung1 wahr ist
} else if (Bedingung2) {
  // Code, der ausgeführt wird, wenn Bedingung2 wahr ist
} else {
  // Code, der ausgeführt wird, wenn keine der Bedingungen wahr ist
}
```
### `for` Schleife

Die `for` Schleife ist eine der am häufigsten verwendeten Schleifen in JavaScript. Sie wird verwendet, um einen Codeblock mehrmals auszuführen, und ist besonders nützlich, wenn die Anzahl der Wiederholungen im Voraus bekannt ist.

### Syntax

Die Syntax einer `for` Schleife sieht so aus:

```jsx
for (Initialisierung; Bedingung; Inkrement) {
  // Code, der wiederholt ausgeführt werden soll
}
```

- **Initialisierung**: In diesem Schritt wird üblicherweise eine Zählvariable initialisiert. Dieser Schritt wird vor dem ersten Durchlauf der Schleife ausgeführt.
- **Bedingung**: Vor jedem Durchlauf der Schleife wird diese Bedingung überprüft. Wenn die Bedingung `true` ergibt, wird der Schleifenkörper ausgeführt. Wenn sie `false` ergibt, endet die Schleife.
- **Inkrement**: Nach jedem Durchlauf der Schleife wird dieser Schritt ausgeführt. Häufig wird hier die Zählvariable inkrementiert (erhöht) oder dekrementiert (verringert).

### Beispiele

**Beispiel 1: Einfaches Zählen**

Drucken Sie die Zahlen von 1 bis 5 in der Konsole.

```jsx
for (let i = 1; i <= 5; i++) {
  console.log(i);
}
```

**Beispiel 2: Iteration durch ein Array**

Angenommen, Sie haben ein Array mit Namen, und Sie möchten jeden Namen in der Konsole ausgeben.

```jsx
let namen = ["Anna", "Bob", "Charlie", "Dana", "Eli"];

for (let i = 0; i < namen.length; i++) {
  console.log(namen[i]);
}
```

In diesem Beispiel startet `i` bei 0 (da Arrays in JavaScript bei 0 beginnen), und die Schleife läuft, solange `i` kleiner als die Länge des Arrays `namen` ist. Mit jedem Durchlauf wird `i` um 1 erhöht, sodass auf jedes Element im Array zugegriffen und es ausgegeben werden kann.

## `while`Schleifen

Eine `while`-Schleife in JavaScript ermöglicht es, einen Codeblock wiederholt auszuführen, solange eine bestimmte Bedingung wahr (`true`) ist. Die grundlegende Syntax einer `while`-Schleife lautet wie folgt:

```jsx
while (Bedingung) {
  // Codeblock, der wiederholt ausgeführt wird
}

```

### Wie `while`Schleifen funktionieren:

1. **Bedingung prüfen**: Vor jedem Durchlauf der Schleife wird die Bedingung geprüft.
2. **Code-Ausführung**: Wenn die Bedingung `true` ergibt, wird der Codeblock innerhalb der Schleife ausgeführt.
3. **Wiederholung**: Nach der Ausführung des Codeblocks wird die Bedingung erneut geprüft. Wenn sie immer noch `true` ist, wird der Codeblock erneut ausgeführt. Dieser Prozess wiederholt sich, bis die Bedingung `false` ergibt.
4. **Beendigung**: Sobald die Bedingung `false` ergibt, wird die Ausführung der Schleife beendet, und das Programm fährt mit dem Code fort, der auf die Schleife folgt.

### Wichtig:

- Die Bedingung sollte irgendwann während der Ausführung der Schleife auf `false` gesetzt werden. Andernfalls würde die Schleife unendlich laufen, was zu einem "Frozen" oder "Crash" des Programms führen kann.
- Die Bedingungsvariable muss in der Regel vor der Schleife initialisiert und innerhalb der Schleife modifiziert werden, um den Abbruch der Schleife sicherzustellen.