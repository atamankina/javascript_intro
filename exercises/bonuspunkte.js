function berechneBelohnungspunkte(einkaeufe) {
    // Berechnen Sie die Gesamtanzahl der Belohnungspunkte

    let punkte = 0;

    for (let i = 0; i < einkaeufe.length; i++) {
        if (einkaeufe[i] > 100 ) {
            punkte += (einkaeufe[i] - 100) * 2;
        }
    }

    return punkte;

  }
  
  // Test
  console.log(berechneBelohnungspunkte([120, 99, 200, 110])); // Sollte die Gesamtanzahl der Punkte ausgeben
  