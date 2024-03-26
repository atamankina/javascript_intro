function empfehleVerkehrsmittel(uhrzeit) {
    if (uhrzeit >= 0 && uhrzeit <= 24) {
      if ((uhrzeit >= 7 && uhrzeit <= 9) || (uhrzeit >= 16 && uhrzeit <= 18)) {
        return "Öffentlicher Verkehr";
      } else {
        return "Fahrrad";
      }
    } else {
      return "Ungültige Uhrzeit. Bitte geben Sie eine Uhrzeit zwischen 0 und 24 an.";
    }
  }
  
// Test
console.log(empfehleVerkehrsmittel(17)); // Sollte "Öffentlicher Verkehr" ausgeben
  