function berechneRueckzahlungsDauer(schulden, monatlicheRate) {
    // Berechnen Sie die Dauer der Schuldenrückzahlung
    if (schulden <= 0 || monatlicheRate <= 0) {
      return "Schulden und monatliche Rate müssen größer als 0 sein.";
    }

    let monate = 0;
    while (schulden > 0) {
        schulden -= monatlicheRate;
        monate++;
    }
    return monate;
  }
  
  // Test
  console.log(berechneRueckzahlungsDauer(1000, 88)); // Sollte die Anzahl der Monate ausgeben, bis die Schulden zurückgezahlt sind