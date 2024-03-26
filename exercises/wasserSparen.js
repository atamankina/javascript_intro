function tageBisLeer(reservoirLiter, taeglicherVerbrauch) {
    // Berechnen Sie, wie viele Tage das Wasser noch reicht
    if (taeglicherVerbrauch <= 0) {
        return "Das Wasser wird nicht verbraucht.";
    } else {
        const tage = reservoirLiter / taeglicherVerbrauch;
        return `${tage} Tage bis das Reservoir leer ist`;
    }
    
  }
  
// Test
console.log(tageBisLeer(200, 0)); // Sollte "10 Tage bis das Reservoir leer ist" ausgeben