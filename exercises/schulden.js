function berechneRueckzahlungsDauer(schulden, monatlicheRate) {
    // Berechnen Sie die Dauer der Schuldenrückzahlung
    let monate = Math.ceil(schulden / monatlicheRate);
    return monate;
  }
  
  // Test
  console.log(berechneRueckzahlungsDauer(1000, 88)); // Sollte die Anzahl der Monate ausgeben, bis die Schulden zurückgezahlt sind