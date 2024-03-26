function empfehleVerkehrsmittel(uhrzeit) {
    // Empfehlen Sie ein Verkehrsmittel basierend auf der Uhrzeit
    if (uhrzeit >= 7 && uhrzeit <= 9) {
        return "Öffentlich";
    } else if (uhrzeit >= 16 && uhrzeit <= 18) {
        return "Öffentlich";
    } else {
        return "Fahrrad";
    } 
  }
  
// Test
console.log(empfehleVerkehrsmittel(50)); // Sollte "Öffentlicher Verkehr" ausgeben
  