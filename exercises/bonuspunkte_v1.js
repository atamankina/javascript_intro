function berechneBelohnungspunkte(einkaeufe) {
    // Berechnen Sie die Gesamtanzahl der Belohnungspunkte

    let punkte = 0;

    for (let beitrag of einkaeufe) {
        if (beitrag > 100 ) {
            punkte += (beitrag - 100) * 2;
        }
    }

    return punkte;

  }
  
  // Test
  console.log(berechneBelohnungspunkte([120, 99, 200, 110])); // Sollte die Gesamtanzahl der Punkte ausgeben
  